import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

let API = "http://localhost:3005/books"

class App extends Component {


  state = {
    books: [],
    bookShelf: []
  }

  componentDidMount() {
    fetch(API).then(resp => resp.json())
    .then(result => this.setState({
      books: result
    }))
  }

  moveToBookShelf = (id) => {
    // console.log(book)
    if (this.state.bookShelf.some(book => book.id === id)) {
      alert("Book is already on the shelf.")
    } else {let book = this.state.books.filter(book => book.id === id)
      this.setState({ 
        bookShelf: [...this.state.bookShelf, book[0]]
      }) }
  }

  removeFromBookShelf = (id) => {
    let newBookShelf = this.state.bookShelf.filter(book => book.id !== id)
    // console.log(newBookShelf)
    this.setState({
      bookShelf: newBookShelf
    })
  }

  addBook = (book) => {
    // console.log("before", this.state.books)
    this.setState({
      books: [...this.state.books, book]
    })
  }


  render() {
    // console.log(this.state.bookShelf)
    return (
      <div className="book-container">
        <BookList books={this.state.books} moveToBookShelf={this.moveToBookShelf} addBook={this.addBook}/>
        <Bookshelf bookShelf={this.state.bookShelf} removeFromBookShelf={this.removeFromBookShelf}/>
      </div>
    );
  }
}

export default App;
