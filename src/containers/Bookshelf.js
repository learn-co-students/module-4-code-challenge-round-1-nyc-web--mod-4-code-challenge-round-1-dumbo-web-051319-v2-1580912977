import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  // console.log("shelf", props)
  return (
    <div>
      <h1>Book Shelf</h1>
      {props.books.map((book)=>
      <div onClick = {()=>{props.removeBookFromShelf(book)}}>
      <ul><h2>{book.title}</h2>
      <img src={book.img} alt="you're not ready"></img>
      </ul>
      </div>
      )}
    </div>
  );
};

export default Bookshelf;
