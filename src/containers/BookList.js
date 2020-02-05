import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    let books = this.props.list.map( book => 
      <Book 
        action={this.props.addToShelf}
        key={book.id} 
        {...book} /> )
    
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form createBook={this.props.createBook} />
        <ul>{books}</ul>
      </div>
    );
  }
}

export default BookList;
