import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  
  let books = props.books.map(book => <li key={book.id}><Book handleRemove={props.handleRemove} {...book} /></li>)
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{books}</ul>
    </div>
  );
};

export default Bookshelf;
