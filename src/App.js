import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  constructor() {
    super()
    this.state = {
      bookList: [],
      yourBooks: [],
      title: "",
      author: "",
      img: ""
    }
  }

  bookShelfAdd = e => {
    let aBook = {
      id: e.target.id, 
      title: e.target.title,
      author: e.target.author,
      img: e.target.src,
      inBookShelf: true
    }
    console.log(aBook)
    this.setState({yourBooks: [...this.state.yourBooks, aBook]})
  }

  bookShelfRemove = e => {
    this.setState({yourBooks: this.state.yourBooks.map(book => book.id !== e.target.id)})
  }

  bookFormHandle = e => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  bookPostSubmit = e => {
    e.preventDefault()
    fetch("http://localhost:3005/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        title: this.state.title,
        author: this.state.author,
        img: this.state.img,
      })
    })
    .then(res => res.json())
    .then(book => this.setState({bookList: [...this.state.bookList, book] }))
  }

  componentDidMount() {
    fetch("http://localhost:3005/books")
    .then(res => res.json())
    .then(books => this.setState({bookList: books}))
  }

  render() {
    return (
      
      <div className="book-container">
        <BookList bookPostSubmit={this.bookPostSubmit} bookList={this.state.bookList} bookShelfAdd={this.bookShelfAdd} title={this.state.title} author={this.state.author} img={this.state.img} bookFormHandle={this.bookFormHandle}/>
        <Bookshelf yourBooks={this.state.yourBooks} bookShelfRemove={this.bookShelfRemove}/>
      </div>
    );
  }
}

export default App;
