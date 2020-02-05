import React from "react";

class Form extends React.Component {

  state = {
    title: "",
    author: "",
    img: ""
  }

  addTitle = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  addAuthor = (event) => {
    this.setState({
      author: event.target.value
    })
  }
  
  addImage = (event) => {
    this.setState({
      img: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()

    let newBook = {
      title: this.state.title,
      author: this.state.author,
      img: this.state.img
    }

    this.props.addBookToList(newBook)
  }

  
  render() {

    return (
      <div>
        <h1>Add Book</h1>
        <form onSubmit={this.onSubmit}>
          <input onChange={this.addTitle} value={this.state.title} type="text" placeholder="Enter Book Name"></input>
          <input onChange={this.addAuthor} value={this.state.author} type="text" placeholder="Enter Book Author"></input>
          <input onChange={this.addImage} value={this.state.img} type="text" placeholder="Add Book Cover"></input>
          <br></br>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    )
  }
}

export default Form;
