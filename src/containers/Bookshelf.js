import React from "react";
import Book from "../components/Book";

class Bookshelf extends React.Component{

  removeHandler = (e) => {
    console.log(e.target)
  }

  render(){
    let displayedShelfBooks = this.props.shelfBooks.map(book => <Book key={book.id} book={book} onClick={this.removeHandler}/>)
    return (
      <div>
        <h1>Book Shelf</h1>
        <ul>{displayedShelfBooks}</ul>
      </div>
    )
  }
}

export default Bookshelf;
