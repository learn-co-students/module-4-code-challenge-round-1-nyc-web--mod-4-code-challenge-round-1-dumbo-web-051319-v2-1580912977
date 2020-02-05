import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  let books = props.shelf.map(book =>
    <Book
      action={props.removeFromShelf}
      key={book.id}
      {...book} />)
  console.log("books", books)
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{books}</ul>
    </div>
  );
};

export default Bookshelf;
