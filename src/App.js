import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  render() {
    return (
      <div className="book-container">
        <BookList />
        <Bookshelf />
      </div>
    );
  }
}

export default App;
