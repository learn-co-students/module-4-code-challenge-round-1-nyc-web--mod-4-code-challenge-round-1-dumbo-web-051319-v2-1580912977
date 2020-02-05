import React from "react";

const Book = props => {
  // render book title and image
  // onClick if the book component has access to addToBookShelf function, call that function (component lives in book list)
  // onClick if book component does not have access to addToBookShelf, call removeFromBookShelf (component lives in book shelf)
  return (
    <div>
      <h2>{props.title}</h2>
      <img name={props.id} alt={props.title} src={props.img} onClick={props.addToBookShelf ? props.addToBookShelf : props.removeFromBookShelf}/>
    </div>
  );
};

export default Book;
