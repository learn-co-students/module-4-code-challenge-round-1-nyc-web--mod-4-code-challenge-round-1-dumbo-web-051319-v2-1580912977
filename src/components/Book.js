import React from "react";

const Book = props => {
  // console.log("book comp", props)
  return (
    <div onClick = { () => props.addBookToShelf(props.bookObj)}>
      <h2>{props.title}</h2>
      <img src={props.image} alt = "you're not ready"></img>
    </div>
  );
};

export default Book;
