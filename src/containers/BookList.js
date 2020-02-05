import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    // render form component
    // return the list of books
    // pass books the addToBookShelf function as props
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form addNewBook={this.props.addNewBook} />
        <ul>{this.props.books.map(book => <Book key={book.id} addToBookShelf={this.props.addToBookShelf} {...book} />)}</ul>
      </div>
    );
  }
}

export default BookList;
