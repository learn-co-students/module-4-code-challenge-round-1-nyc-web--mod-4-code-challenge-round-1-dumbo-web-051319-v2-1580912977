import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  renderBooks = () => {
    return this.props.books.map(book => <li><Book key={book.id} {...book}/></li>)
  }

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form />
        <ul>{this.renderBooks()}</ul>
      </div>
    );
  }
}

export default BookList;
