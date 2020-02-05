import React from "react";
import Book from "../components/Book";

class Bookshelf extends React.Component {

  renderBooks = () => {
    return this.props.bookShelf.map(book => <li><Book key={book.id} {...book} removeFromBookShelf={this.props.removeFromBookShelf}/></li>)
  }

  render() {

    return (
      <div>
        <h1>Book Shelf</h1>
        <ul>{this.renderBooks()}</ul>
      </div>
    );

  }

};

export default Bookshelf;
