import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

const api = `http://localhost:3005/books`

class App extends Component {

  state = {
    books: [],
    displayedBooks: [],
    shelfBooks: []
  }

  fetchBooks = () => {
    fetch(api)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        books: data,
        displayedBooks: data
      })
    })
  }
      
  componentDidMount(){
    this.fetchBooks()
  }

  addBookHandler = (e, bookId) => {
    let found = this.state.books.find(book => book.id === bookId)
    found = {...found}
      this.setState({
        shelfBooks: [...this.state.shelfBooks, found]
      })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.setState({
      books: [...this.state.books, e],
      [e.target.name]: e.target.value
    })
    console.log('trying', e)
  }
  
  render() {
    console.log(this.state.shelfBooks)
    return (
      <div className="book-container">
        <BookList books={this.state.books} addBookHandler={this.addBookHandler} submitHandler={this.submitHandler}/>
        <Bookshelf shelfBooks={this.state.shelfBooks}/>
      </div>
    );
  }
}

export default App;
