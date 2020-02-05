import React from "react";

const Book = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <img src={props.img} alt={props.title} onClick={props.clicked}/>
    </div>
  );
};

export default Book;
