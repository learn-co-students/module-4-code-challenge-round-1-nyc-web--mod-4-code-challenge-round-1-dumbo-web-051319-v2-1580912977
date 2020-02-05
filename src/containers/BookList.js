import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form submitHandler={this.props.submitHandler} title={this.props.title} author={this.props.author} img={this.props.img} changeHandler={this.props.changeHandler}/>
      <ul>{this.props.books.map(book => (<Book key={book.id} book={book} action={this.props.addBookToShelf}/>))}</ul>
      </div>
    );
  }
}

export default BookList;
