import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handleSubmit = {this.props.handleSubmit}/>
        <ul>{this.props.books.map(book => <li><Book key={book.title} title={book.title} author={book.author} img = {book.img} clicked = {this.props.clicked}/></li>)}</ul>
      </div>
    );
  }
}

export default BookList;
