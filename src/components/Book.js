import React from "react";

const Book = props => {

  return (
    <div onClick={() => props.bookAction(props.id)}>
      <h2>{props.title}</h2>
      <img src={props.img} alt="book cover"></img>
    </div>
  );
};

export default Book;
