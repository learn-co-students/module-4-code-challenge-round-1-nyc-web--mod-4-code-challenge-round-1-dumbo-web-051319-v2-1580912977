import React from "react";

const Book = props => {
  return (
    <div onClick={() => props.action(props.book)}>
      <h2>{props.book.title}</h2>
      <img alt='book cover' src={props.book.img}/>
    </div>
  );
};

export default Book;
