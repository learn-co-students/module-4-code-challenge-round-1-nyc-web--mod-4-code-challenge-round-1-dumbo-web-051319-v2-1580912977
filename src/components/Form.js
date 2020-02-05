import React from "react";

const emptyState = {
  title: "",
  author: "",
  img: ""
}

class Form extends React.Component {

  state = {...emptyState}

  changehandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.props.createBook({...this.state})
    this.setState(emptyState)

  }

  render() {
    console.log(this.state)
    return (
      <div>
        <form>
          <label>Title:
            <input onChange={this.changehandler} value={this.state.title} type="text" name="title" />
          </label>
          <label>Author:
            <input onChange={this.changehandler} value={this.state.author} type="text" name="author" />
          </label>
          <label>Image URL:
            <input onChange={this.changehandler} value={this.state.img} type="text" name="img" />
          </label>
          <input onClick={this.submitHandler} type="submit" value="Add to List" />
        </form>
      </div>)
  }
}

export default Form;
