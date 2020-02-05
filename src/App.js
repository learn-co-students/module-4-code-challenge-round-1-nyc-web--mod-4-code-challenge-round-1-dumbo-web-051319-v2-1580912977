import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    bookShelf: []
  }

  componentDidMount() {
    // fetch books from json db once app component mounts
    fetch("http://localhost:3005/books")
    .then(resp => resp.json())
    .then(bookData => this.setState({books: bookData}))
  }

  addToBookShelf = (e) => {
    // grab bookId from the "name" on image
    // from the array of book data, find the book whose id matches bookId
    // only if the book is not already in the book shelf, add the book object to the
    // book shelf array and set state to include the updated book shelf array
    let bookId = e.target.name
    let selectedBook = this.state.books.find(book => book.id === parseInt(bookId))

    if(!this.state.bookShelf.includes(selectedBook)) {
      let bookShelfCopy = [...this.state.bookShelf, selectedBook]
      this.setState({bookShelf: bookShelfCopy})
    }
  }

  removeFromBookShelf = (e) => {
    // grab bookId from the "name" on image
    // make copy of book shelf array
    // filter through the copy and select only the books whose ids do not match bookId
    // set state to the book shelf array that does not include selected book
    let bookId = e.target.name
    let reducedBookShelfArr = [...this.state.bookShelf]
    reducedBookShelfArr = reducedBookShelfArr.filter(book => book.id !== parseInt(bookId))
    this.setState({bookShelf: reducedBookShelfArr})
  }

  addNewBook = (newBookObj) => {
    // POST fetch request to add new book to json db
    // then make copy of books array
    // add the returned new book obj (with an id) to the books array
    // set state to books array that includes new book 
    // pessimistic rendering of new book
    fetch("http://localhost:3005/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newBookObj)
    })
    .then(resp => resp.json())
    .then(newBook => {
      let updatedBooksArr = [...this.state.books]
      updatedBooksArr = [newBook, ...this.state.books]
      this.setState({books: updatedBooksArr})
    })
  }

  render() {
    // render book list and book shelf
    // pass required functions and data as props
    return (
      <div className="book-container">
        <BookList books={this.state.books} addToBookShelf={this.addToBookShelf} addNewBook={this.addNewBook} />
        <Bookshelf bookShelf={this.state.bookShelf} removeFromBookShelf={this.removeFromBookShelf} />
      </div>
    );
  }
}

export default App;
