import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  
  render() {

    let allBooks = this.props.books
    
    let bookComponentList = allBooks.map(book => 
      <Book 
      {...book}
      key={book.id}
      bookAction={this.props.bookAction}
      />)
    

    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form 
        addBookToList={this.props.addBookToList}
        />
        <ul>{bookComponentList}</ul>
      </div>
    );
  }
}

export default BookList;
