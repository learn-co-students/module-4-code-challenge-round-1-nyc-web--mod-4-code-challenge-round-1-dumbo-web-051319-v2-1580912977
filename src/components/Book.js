import React from "react";

const Book = props => {
  return (
    <div onClick={() => props.moveToBookShelf ? props.moveToBookShelf(props.id) : props.removeFromBookShelf(props.id)}>
      <h2>{props.title}</h2>
      <img src={props.img} alt="bookImage" />
    </div>
  );
};

export default Book;
