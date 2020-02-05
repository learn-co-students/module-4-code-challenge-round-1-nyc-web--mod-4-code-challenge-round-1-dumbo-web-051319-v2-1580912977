import React from "react";

const Book = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <img name={props.title} alt={props.title} src={props.img} onClick={props.addToBookShelf ? props.addToBookShelf : props.removeFromBookShelf}/>
    </div>
  );
};

export default Book;
