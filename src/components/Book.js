import React from "react";

const Book = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <img src={props.img} alt="bookImage" />
    </div>
  );
};

export default Book;
