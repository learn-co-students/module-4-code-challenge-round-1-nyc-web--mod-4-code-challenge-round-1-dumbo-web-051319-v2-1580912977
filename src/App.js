import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    shelfbooks: []
  }

  componentDidMount(){
    fetch(`http://localhost:3005/books`)
    .then(resp => resp.json())
    .then(books => this.setState({
      books: books
    }))
  }

  handleAdd = (id) => {
    let newBook = this.state.books.find(book => book.id === id)
    this.setState({
      shelfbooks: [...this.state.shelfbooks, newBook]
    })
  }

  handleRemove = (id) => {
    console.log(id)
    let newList = this.state.shelfbooks.filter(book => book.id !== id)
    this.setState({
      shelfbooks: [...newList]
    })
  }

  addBook = (bookObj) => {
    this.setState({
      books: [...this.state.books, bookObj]
    })
  }

 


  render() {
    

    return (
      <div className="book-container">
        <BookList handleAdd={this.handleAdd} addBook={this.addBook} books={this.state.books} />
        <Bookshelf handleRemove={this.handleRemove} removeBook={this.removeBook} books={this.state.shelfbooks}/>
      </div>
    );
  }
}

export default App;
