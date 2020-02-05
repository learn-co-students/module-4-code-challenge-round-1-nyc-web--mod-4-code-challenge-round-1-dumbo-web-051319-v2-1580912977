import React from "react";

const Book = props => {
  return (
    <div  onClick={event => props.bookShelfAdd(event)}>
      <h3>{props.book.title}</h3>
      <img alt="Something Should be here" id={props.book.id} author={props.book.author} title={props.book.title} src={props.book.img}></img>
    </div>
  );
};

export default Book;
