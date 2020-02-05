import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  // return the list of books
  // pass books the removeFromBookShelf function as props
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{props.bookShelf.map(book => <Book key={book.id} removeFromBookShelf={props.removeFromBookShelf} {...book} />)}</ul>
    </div>
  );
};

export default Bookshelf;
