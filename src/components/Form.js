import React from "react";

class Form extends React.Component {

  state = {
    title: "", 
    author: "", 
    img: ""
  }

  formHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) => {
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
