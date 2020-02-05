import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  let displayedBooks = props.books

  if (props.bookself) {

    displayedBooks = displayedBooks.filter()

  }

  // console.log(props)
    
  let booksOnShelf = displayedBooks.map(book => 
    <Book 
    {...book}
    key={book.id}
    bookAction={props.bookAction}
    />)
  
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{booksOnShelf}</ul>
    </div>
  );
};

export default Bookshelf;
