import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Shop.css";
import { addToCart } from '../features/cartSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'; // Import Link

const Shop = () => {
  const dispatch = useDispatch();

  const handleBookClick = (book) => {
    dispatch(addToCart(book));
  };
  
  const [books, setBooks] = useState([]);
  const [displayedBooks, setDisplayedBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const booksPerPage = 9;
  const [bookRange, setBookRange] = useState(books);
  const [activeButton, setActiveButton] = useState("all");

  // Track the first 3 books to display in the left section
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
      setFirstThreeBooks(limitedBooks.slice(0, 3)); // Set first 3 for All Books initially
    };

    fetchBooks();
  }, []);

  // Function to update displayed books and first three books
  const updateDisplayedBooks = (newBooks, button) => {
    setBookRange(newBooks);
    setCurrentPage(0);
    setDisplayedBooks(newBooks.slice(0, booksPerPage));
    setActiveButton(button);
    setFirstThreeBooks(newBooks.slice(4, 7)); // Update the first 3 books for the selected range
  };

  // Show all books and update first three books for "All Books"
  const showAllBooks = () => {
    updateDisplayedBooks(books, "all");
  };

  // Show first 50 books and update first three books for "Kindergarten"
  const showBooks1to50 = () => {
    updateDisplayedBooks(books.slice(0, 50), "kindergarten");
  };

  // Show books from 51 to 75 and update first three books for "High School"
  const showBooks51to75 = () => {
    updateDisplayedBooks(books.slice(50, 75), "highschool");
  };

  // Show books from 76 to 100 and update first three books for "College"
  const showBooks76to100 = () => {
    updateDisplayedBooks(books.slice(75, 100), "college");
  };

  // Handle search query input
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

  return (
    <div className="shop">
       <div className="topshop10">
        <Link to="/">Home | </Link><span className="toppp">Shop</span>
       </div>
      <div className="topshop">
        <div className="topshoptitre"><p>Eduvi Online Book Shop</p></div>
        <div className="topshopimage"> <img src="src/assets/books.png" alt="" /></div>
      </div>
      {/* Rest of the code */}
    </div>
  );
};

export default Shop;
