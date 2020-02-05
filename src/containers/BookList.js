import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form addNewBook={this.props.addNewBook} />
        <ul>{this.props.books.map(book => <Book key={book.title} addToBookShelf={this.props.addToBookShelf} {...book} />)}</ul>
      </div>
    );
  }
}

export default BookList;
