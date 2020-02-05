import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    bookshelf: [],
    title: '',
    author: '',
    img: ''
  }

  componentDidMount(){
    fetch('http://localhost:3005/books')
    .then(resp => resp.json())
    .then(books => {
      this.setState({books})
    })
    .catch(error => {alert(error.message)})
  }

  addBookToShelf = (book) => {
    this.setState(prevState => ({
      bookshelf: [...prevState.bookshelf, book]
    }))
  }

  removeBook = (book) => {
    let bookshelf = this.state.bookshelf.reduce((books, b) => {
      if (b.id !== book.id){
        books.push(b)
      } return books
    }, [])

    this.setState({bookshelf})
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e, book) => {
    e.preventDefault()
    this.setState(prevState => ({
      books: [book, ...prevState.books],
      title: '',
      author: '',
      img: ''
    }))
  }

  render() {
    console.log(this.state.books)
    return (
      <div className="book-container">
        <BookList books={this.state.books} addBookToShelf={this.addBookToShelf} submitHandler={this.submitHandler} title={this.state.title} author={this.state.author} img={this.state.img} changeHandler={this.changeHandler}/>
        <Bookshelf bookshelf={this.state.bookshelf} removeBook={this.removeBook}/>
      </div>
    );
  }
}

export default App;

