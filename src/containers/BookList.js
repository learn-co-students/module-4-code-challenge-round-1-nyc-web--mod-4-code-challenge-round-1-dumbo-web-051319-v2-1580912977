import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";


class BookList extends Component {

  state = {
    viewForm: false
  }

  toggleViewForm = ()=>{
    this.setState({viewForm: !this.state.viewForm})
  }
  render() {
    return (
      <div className="book-list">
        <h1>Book List </h1>
        <button onClick = {this.toggleViewForm}>Add A New Book!</button>

    {this.state.viewForm ?  <Form 
    handleSubmit = {this.props.handleSubmit}
    /> : null }
        <ul>{this.props.books.map((book)=> <Book 
        bookObj = {book}
        addBookToShelf ={this.props.addBookToShelf}
        key = {book.id}
        title = {book.title}
        author = {book.author}
        image = {book.img}
        />)}</ul>
      </div>
    );
  }
}

export default BookList;
