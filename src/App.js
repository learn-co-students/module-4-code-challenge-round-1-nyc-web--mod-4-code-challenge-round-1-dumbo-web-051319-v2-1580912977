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
    fetch("http://localhost:3005/books")
    .then(resp => resp.json())
    .then(bookData => this.setState({books: bookData}))
  }

  addToBookShelf = (e) => {
    let bookTitle = e.target.name
    let selectedBook = this.state.books.find(book => book.title === bookTitle)

    if(!this.state.bookShelf.includes(selectedBook)) {
      let bookShelfCopy = [...this.state.bookShelf, selectedBook]
      this.setState({bookShelf: bookShelfCopy})
    }
  }

  removeFromBookShelf = (e) => {
    let bookTitle = e.target.name
    let reducedBookShelfArr = [...this.state.bookShelf]
    reducedBookShelfArr = reducedBookShelfArr.filter(book => book.title !== bookTitle)
    this.setState({bookShelf: reducedBookShelfArr})
  }

  addNewBook = (newBookObj) => {
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
    return (
      <div className="book-container">
        <BookList books={this.state.books} addToBookShelf={this.addToBookShelf} addNewBook={this.addNewBook} />
        <Bookshelf bookShelf={this.state.bookShelf} removeFromBookShelf={this.removeFromBookShelf} />
      </div>
    );
  }
}

export default App;
