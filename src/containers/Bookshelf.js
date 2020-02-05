import React from "react";
import BookShelfBook from "../components/BookShelfBook";

const Bookshelf = props => {
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{props.yourBooks.map(book => <BookShelfBook bookShelfRemove={props.bookShelfRemove} key={book.id} id={book.id} book={book}/>)}</ul>
    </div>
  );
};

export default Bookshelf;
