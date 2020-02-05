import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  render() {
    let displayedBooks = this.props.books.map(book => <Book key={book.id} book={book} addBookHandler={(e) => this.props.addBookHandler(e, book.id)}/>)
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form submitHandler={(e) => this.props.submitHandler(e)}/>
        <ul>{displayedBooks}</ul>
      </div>
    );
  }
}

export default BookList;
