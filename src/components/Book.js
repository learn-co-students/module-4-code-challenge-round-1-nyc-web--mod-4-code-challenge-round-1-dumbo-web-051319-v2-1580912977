import React from "react";

const Book = props => {
  return (
    <div onClick={(e) => props.addBookHandler(e, props.book.id)}>
      <h2>{props.book.title}</h2>
      <img src={props.book.img} alt="oops"></img>
    </div>
  );
};

export default Book;
