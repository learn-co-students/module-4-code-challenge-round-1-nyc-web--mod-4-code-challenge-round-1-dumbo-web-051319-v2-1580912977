import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    bookshelf: false
  }


  componentDidMount() {
    fetch("http://localhost:3005/books")
    .then(response => response.json())
    .then(bookData => this.setState({
      books: bookData
    }))
  }

  addToBookShelf = (bookId) => {
    
    this.setState({
      bookshelf: true
    }, console.log("adding to bookshelf", this.state.bookshelf, bookId))
  }

  removeFromBookShelf = () => {
    console.log("removing from bookshelf")
    // this.setState({
    //   bookshelf: false
    // })
  }

  addBookToList = (newBook) => {
  
    console.log("Adding book to the list", newBook)
    this.setState({
      books: [...this.state.books, newBook]
    })
    
  }

  render() {

    // console.log(this.state.books)

    return (
      <div className="book-container">
        <BookList 
        books={this.state.books}
        bookAction={this.addToBookShelf}
        addBookToList={this.addBookToList}
        />
        <Bookshelf 
        books={this.state.books}
        bookshelf={this.state.bookshelf}
        bookAction={this.removeFromBookShelf}
        />
      </div>
    );
  }
}

export default App;


// add in bookshelf state - true or false
// when clicking on the book, the state should change to the opposite
// in bookshelf, only those whose state true are rendered
// in book - have one action - bookaction, but pass different functions to components 