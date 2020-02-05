import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

const url = "http://localhost:3005/books"

class App extends Component {

  state = {
    list: [],
    shelf: []
  }

  componentDidMount() {
    fetch(url)
    .then(resp => resp.json())
    .then(books => {
      this.setState({
        list: books
      })
    })
  }

  addToShelf = (id) => {
    // ensure you cannot add the same book more than once
    if (!this.state.shelf.find(book => id === book.id)) {
      let book = this.state.list.find(book => id === book.id)
      this.setState({
        shelf: [...this.state.shelf, book]
      })
    } else {
      alert("You've already got that book on your shelf!")
    }
  }

  removeFromShelf = (id) => {
    let shelf = this.state.shelf.filter(book => book.id !== id)
    this.setState({
      shelf
    })
  }

  createBook = (book) => {
    //pessimistic render
    const configObj ={
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify(book)
    }

    fetch(url, configObj)
    .then(resp => resp.json())
    .then(book => {
      this.setState({
        list: [...this.state.list, book]
      })
    })
  }

  render() {    
    return (
      <div className="book-container">
        <BookList 
          list={this.state.list}
          addToShelf={this.addToShelf}
          createBook={this.createBook} />
        <Bookshelf
          shelf={this.state.shelf}
          removeFromShelf={this.removeFromShelf} />
      </div>
    );
  }
}

export default App;
