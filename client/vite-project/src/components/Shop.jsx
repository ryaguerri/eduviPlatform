import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Shop.css";

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [displayedBooks, setDisplayedBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState(""); // State for the search query
  const booksPerPage = 9; // Number of books to display per page
  const [bookRange, setBookRange] = useState(books); // To keep track of the currently selected range of books
  const [activeButton, setActiveButton] = useState("all"); // State for active button

  useEffect(() => {
    const fetchBooks = async () => {
      let allBooks = [];
      const subjects = ["kindergarten", "high-school", "college"]; // Subjects to fetch
      const limit = 50; // Number of books per request

      for (const subject of subjects) {
        const response = await axios.get(
          `https://openlibrary.org/subjects/${subject}.json?limit=${limit}`
        );
        const bookData = response.data.works.map((item) => ({
          id: item.key,
          title: item.title,
          image: item.cover_id
            ? `https://covers.openlibrary.org/b/id/${item.cover_id}-L.jpg`
            : "https://via.placeholder.com/150",
          price: Math.random() * 20 + 10,
          rating: Math.floor(Math.random() * 5) + 1, // Random integer rating from 1 to 5
        }));
        allBooks = [...allBooks, ...bookData];
      }

      // If total books are less than 100, slice to 100
      const limitedBooks = allBooks.slice(0, 100);
      setBooks(limitedBooks);
      setDisplayedBooks(limitedBooks.slice(0, booksPerPage)); // Display the first 9 books by default
      setBookRange(limitedBooks); // Set initial range of books
    };

    fetchBooks();
  }, []);

  // Function to update displayed books and reset the current page
  const updateDisplayedBooks = (newBooks, button) => {
    setBookRange(newBooks);
    setCurrentPage(0); // Reset to the first page
    setDisplayedBooks(newBooks.slice(0, booksPerPage)); // Display the first 9 books
    setActiveButton(button); // Set the clicked button as active
  };

  // Filter books based on the search query, only in the current range
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter books based on the current range
    const filteredBooks = bookRange.filter((book) =>
      book.title.toLowerCase().includes(query)
    );

    // Update displayed books based on the filtered results
    setDisplayedBooks(filteredBooks.slice(0, booksPerPage)); // Display first 9 of the filtered books
    setCurrentPage(0); // Reset current page
  };

  // Show all books
  const showAllBooks = () => {
    updateDisplayedBooks(books, "all");
  };

  // Show specific ranges of books
  const showBooks1to50 = () => {
    updateDisplayedBooks(books.slice(0, 50), "kindergarten");
  };

  const showBooks51to75 = () => {
    updateDisplayedBooks(books.slice(50, 75), "highschool");
  };

  const showBooks76to100 = () => {
    updateDisplayedBooks(books.slice(75, 100), "college");
  };

  // Navigate to the next page
  const nextPage = () => {
    const nextPage = currentPage + 1;
    if (nextPage * booksPerPage < bookRange.length) {
      setCurrentPage(nextPage);
      setDisplayedBooks(
        bookRange.slice(nextPage * booksPerPage, (nextPage + 1) * booksPerPage)
      );
    }
  };

  // Navigate to the previous page
  const prevPage = () => {
    const prevPage = currentPage - 1;
    if (prevPage >= 0) {
      setCurrentPage(prevPage);
      setDisplayedBooks(
        bookRange.slice(prevPage * booksPerPage, (prevPage + 1) * booksPerPage)
      );
    }
  };

  // Function to render stars based on rating
  const renderStars = (rating) => {
    return [...Array(rating)].map((_, index) => (
      <span key={index}>⭐</span>
    ));
  };

  return (
    <div className="shop">
      <div className="topshop"></div>
      <div className="books">
        <div className="booksleft">
          <div className="booksleft1"></div>
          <div className="booksleft1"></div>
        </div>
        <div className="booksright">
          <div className="booksright1">
            <button
              onClick={showAllBooks}
              className={activeButton === "all" ? "boo1" : "boo"}
            >
              All Books
            </button>
            <button
              onClick={showBooks1to50}
              className={activeButton === "kindergarten" ? "boo1" : "boo"}
            >
              Kindergarten
            </button>
            <button
              onClick={showBooks51to75}
              className={activeButton === "highschool" ? "boo1" : "boo"}
            >
              High School
            </button>
            <button
              onClick={showBooks76to100}
              className={activeButton === "college" ? "boo1" : "boo"}
            >
              College
            </button>
          </div>
          <div className="booksright2">
            <div className="ser">
              <img src="src/assets/s.png" alt="" />
            </div>
            <div className="booksright21">
              <input
                type="text"
                placeholder="Search Class, Course, Book Name"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
            <div className="booksright22"></div>
          </div>
          <div className="booksright3">
            {displayedBooks.length > 0 ? (
              displayedBooks.map((book) => (
                <div className="bookbox" key={book.id}>
                  <div className="bookimage">
                    <img src={book.image} alt={book.title} />
                  </div>
                  <div className="titprirat">
                    <p className="tit">
                      {book.title.split(" ").slice(0, 6).join(" ")}
                    </p>
                    <div className="bookpricerate">
                      <p>{book.price.toFixed(2)}$</p>
                      <p>{renderStars(book.rating)}</p> {/* Render stars based on rating */}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No books found matching your search.</p>
            )}
          </div>
          <div className="booksright4">
            <button onClick={prevPage} disabled={currentPage === 0}>
              <img src="src/assets/ar1.png" alt="" />
            </button>
            <p>Page</p>
            <button>{currentPage}</button>
            <p>of {Math.ceil(bookRange.length / booksPerPage)}</p>
            <button
              onClick={nextPage}
              disabled={(currentPage + 1) * booksPerPage >= bookRange.length}
            >
              <img src="src/assets/ar2.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
