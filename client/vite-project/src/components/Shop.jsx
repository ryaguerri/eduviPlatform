import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Shop.css";
import { addToCartAsync } from "../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Shop = () => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);
  const courses = useSelector((state) => state.cart.courses);
  const email = useSelector((state) => state.user.email);

  useEffect(() => {
    console.log("Email:", email);
  }, [email]);

  const [books, setBooks] = useState([]);
  const [displayedBooks, setDisplayedBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const booksPerPage = 9;
  const [bookRange, setBookRange] = useState(books);
  const [activeButton, setActiveButton] = useState("all");

  const [firstThreeBooks, setFirstThreeBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      let allBooks = [];
      const subjects = ["kindergarten", "high-school", "college"];
      const limit = 50;

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
          rating: Math.floor(Math.random() * 5) + 1,
        }));
        allBooks = [...allBooks, ...bookData];
      }

      const limitedBooks = allBooks.slice(0, 100);
      setBooks(limitedBooks);
      setDisplayedBooks(limitedBooks.slice(0, booksPerPage));
      setBookRange(limitedBooks);
      setFirstThreeBooks(limitedBooks.slice(0, 3));
    };

    fetchBooks();
  }, []);

  const updateDisplayedBooks = (newBooks, button) => {
    setBookRange(newBooks);
    setCurrentPage(0);
    setDisplayedBooks(newBooks.slice(0, booksPerPage));
    setActiveButton(button);
    setFirstThreeBooks(newBooks.slice(4, 7));
  };

  const showAllBooks = () => {
    updateDisplayedBooks(books, "all");
  };

  const showBooks1to50 = () => {
    updateDisplayedBooks(books.slice(0, 50), "kindergarten");
  };

  const showBooks51to75 = () => {
    updateDisplayedBooks(books.slice(50, 75), "highschool");
  };

  const showBooks76to100 = () => {
    updateDisplayedBooks(books.slice(75, 100), "college");
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredBooks = bookRange.filter((book) =>
      book.title.toLowerCase().includes(query)
    );

    setDisplayedBooks(filteredBooks.slice(0, booksPerPage));
    setCurrentPage(0);
  };

  const nextPage = () => {
    const nextPage = currentPage + 1;
    if (nextPage * booksPerPage < bookRange.length) {
      setCurrentPage(nextPage);
      setDisplayedBooks(
        bookRange.slice(nextPage * booksPerPage, (nextPage + 1) * booksPerPage)
      );
    }
  };

  const prevPage = () => {
    const prevPage = currentPage - 1;
    if (prevPage >= 0) {
      setCurrentPage(prevPage);
      setDisplayedBooks(
        bookRange.slice(prevPage * booksPerPage, (prevPage + 1) * booksPerPage)
      );
    }
  };

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, index) => <span key={index}>⭐</span>);
  };

  const handleBookClick = (book) => {
    dispatch(addToCartAsync({ email, book }));
  };

  return (
    <div className="shop">
      <div className="topshop1">
      <Link to="/">Home | </Link> <span className="toppp">Shop</span>
      </div>
      <div className="topshop">
        <div className="topshoptitre">
          <p>Eduvi Online Book Shop</p>
        </div>
        <div className="topshopimage">
          <img src="src/assets/books.png" alt="" />
        </div>
      </div>
      <div className="books">
        <div className="booksleft">
          <div className="booksleft1">
            <p className="par">Popular Books</p>
            {firstThreeBooks.map((book) => (
              <div className="popularbookitem" key={book.id}>
                <div className="popularbookitemimg">
                  <img src={book.image} alt={book.title} />
                </div>
                <div className="popularbookitemimgpara">
                  <p>{renderStars(book.rating)}</p>
                  <p className="para1">
                    {book.title.split(" ").slice(0, 6).join(" ")}
                  </p>
                  <p className="para2">{book.price.toFixed(2)}$</p>
                </div>
              </div>
            ))}
          </div>
          <div className="booksleft2">
            <p className="par">New Arrivals</p>
            {firstThreeBooks.map((book) => (
              <div className="popularbookitem" key={book.id}>
                <div className="popularbookitemimg">
                  <img src={book.image} alt={book.title} />
                </div>
                <div className="popularbookitemimgpara">
                  <p>{renderStars(book.rating)}</p>
                  <p className="para1">
                    {book.title.split(" ").slice(0, 6).join(" ")}
                  </p>
                  <p className="para2">{book.price.toFixed(2)}$</p>
                </div>
              </div>
            ))}
          </div>
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
                <div
                  className="bookbox"
                  key={book.id}
                  onClick={() => handleBookClick(book)}
                >
                  <div className="bookimage">
                    <img src={book.image} alt={book.title} />
                  </div>
                  <div className="titprirat">
                    <p className="tit">
                      {book.title.split(" ").slice(0, 6).join(" ")}
                    </p>
                    <div className="bookpricerate">
                      <p className="para2">{book.price.toFixed(2)}$</p>
                      <p className="riq">{renderStars(book.rating)}</p>
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
              <img src="src/assets/ar1.png" alt="Previous" />
            </button>
            <button onClick={nextPage}>
              <img src="src/assets/ar2.png" alt="Next" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
