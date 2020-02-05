import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  return (
    <div className = "bookshelf">
      <h1>Book Shelf</h1>
      <ul>{props.books.map(book => <li><Book key={book.title} title={book.title} author={book.author} img = {book.img} clicked = {props.clicked}/></li>)}</ul>
    </div>
  )
}

export default Bookshelf;
