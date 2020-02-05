import React from "react";

class Form extends React.Component {

  state = {
    title: "",
    author: "",
    img: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  handleSubmit = (e) => {
    let currentState = { ...this.state }
    e.preventDefault()
    console.log("Got here")
    this.props.addBook(currentState)
    this.resetForm()
  }

  resetForm = () => {
    this.setState({
      title: "",
      author: "",
      img: ""
    });
  }


  render() {
    console.log(this.state)
    return (
      <form onChange={(e) => this.handleChange(e)}>
        <input value={this.state.title} name="title" type="text" placeholder="Title" ></input>
        <input value={this.state.author} name="author" type="text" placeholder="Author" ></input>
        <input value={this.state.img} name="img" type="text" placeholder="Image" ></input>
        <input onClick={(e) => this.handleSubmit(e)} type="submit" value="Submit" />



      </form>

    )

  }
}

export default Form;
