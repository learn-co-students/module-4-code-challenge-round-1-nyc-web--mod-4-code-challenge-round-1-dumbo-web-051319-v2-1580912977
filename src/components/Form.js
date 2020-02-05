import React from "react";

class Form extends React.Component {

  state = {
    title: "", 
    author: "", 
    img: ""
  }

  formHandler = (e) => {
    // mass assignment of state to values from controlled form
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) => {
    // prevent default on submit
    // grab new book obj from current state
    // call the addNewBook function and pass it the new book obj
    // reset state to empty strings thus clearing the form
    e.preventDefault()
    let newBookObj = this.state
    this.props.addNewBook(newBookObj)
    this.setState({
      title: "", 
      author: "", 
      img: ""
    })
  }

  render() {
    // render form to add new book
    return (
      <form onChange={this.formHandler} onSubmit={this.submitHandler}>
        <input type="text" name="title" placeholder="Enter Title" value={this.state.title} />
        <input type="text" name="author" placeholder="Enter Author" value={this.state.author} />
        <input type="text" name="img" placeholder="Enter Cover Image" value={this.state.img} />
        <input type="submit" />
      </form>
    )
  }
}

export default Form;
