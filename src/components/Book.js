import React from "react";

const Book = props => {
  return (
    <div onClick={props.handleAdd ? () => props.handleAdd(props.id) : () => props.handleRemove(props.id)}>
      <h2>{props.title}</h2>
      <img alt="Stop yelling at me!" src={props.img}/>
    </div>
  );
};

export default Book;
