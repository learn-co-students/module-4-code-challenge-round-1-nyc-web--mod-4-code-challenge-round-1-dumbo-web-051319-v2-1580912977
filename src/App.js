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

  componentDidMount(){
    fetch('http://localhost:3005/books')
    .then(res=> res.json())
    .then(books => {
      this.setState({books: books})
      // console.log(this.state.books)
    })
  }

  addBookToShelf=(bookObj)=>{
    this.setState({bookShelf: [...this.state.bookShelf, bookObj]})

    // console.log(this.state.bookShelf)
    // console.log(bookObj)
  }

  removeBookFromShelf=(bookObj)=>{
    let filteredBookShelf = this.state.bookShelf.filter((book)=> book != bookObj)
    this.setState({bookShelf: filteredBookShelf})
    console.log(this.state.bookShelf)

  }

  handleSubmit=(bookState)=>{
    bookState.key = this.state.books.length + 1
    this.setState({books: [...this.state.books, bookState]})
    console.log("submitted", this.state)
  }
  render() {
    return (
      <div className="book-container">
        <BookList books = {this.state.books}
        handleSubmit = {this.handleSubmit}
        addBookToShelf = {this.addBookToShelf}
        />
        <Bookshelf books = {this.state.bookShelf}
        removeBookFromShelf = {this.removeBookFromShelf}
        />
      </div>
    );
  }
}

export default App;
