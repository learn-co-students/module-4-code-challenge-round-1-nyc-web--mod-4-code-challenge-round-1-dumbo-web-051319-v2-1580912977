import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

let API = "http://localhost:3005/books"

class App extends Component {


  state = {
    books: []
  }

  componentDidMount() {
    fetch(API).then(resp => resp.json())
    .then(result => this.setState({
      books: result
    }))
  }


  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} />
        <Bookshelf />
      </div>
    );
  }
}

export default App;
