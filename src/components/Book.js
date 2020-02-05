import React from "react";

const Book = props => {
  return (
    <div onClick={() => props.action(props.id)}>
      <h2>{props.title}</h2>
      <img alt={props.title} src={props.img} />
    </div>
  );
};

export default Book;
