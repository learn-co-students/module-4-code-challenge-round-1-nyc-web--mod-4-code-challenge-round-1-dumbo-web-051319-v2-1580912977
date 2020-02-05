import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state = {
    bookList: [],
    shelfList: []
  }
  componentDidMount() {
    fetch('http://localhost:3005/books')
    .then(response => response.json())
    .then(resp => this.setState({bookList: resp}))
  }

  clicked = (event) =>{
    if(this.state.bookList.find(book => event.target.alt === book.title) !== undefined){
      let book = this.state.bookList.find(book => event.target.alt === book.title)
      let array = [...this.state.bookList]
      array.splice(book, 1)
      this.setState({
        shelfList: this.state.shelfList.concat(book),
        bookList: array
      })
    } else {
      let book = this.state.shelfList.find(book => event.target.alt === book.title)
      let array = [...this.state.shelfList]
      array.splice(book, 1)
      this.setState({
        bookList: this.state.bookList.concat(book),
        shelfList: array
      })
    }
  }
  handleSubmit = (event) => {
    event.preventDefault()
    event.target.reset()
    let book = {title: event.target[0].value, author: event.target[1].value, img: event.target[2].value}
    this.setState({
      bookList: this.state.bookList.concat(book)
    })
  }

  render() {
    return (
      <div className="book-container">
        <BookList books = {this.state.bookList} clicked = {this.clicked} handleSubmit = {this.handleSubmit}/>
        <Bookshelf books = {this.state.shelfList} clicked = {this.clicked}/>
      </div>
    );
  }
}

export default App;
