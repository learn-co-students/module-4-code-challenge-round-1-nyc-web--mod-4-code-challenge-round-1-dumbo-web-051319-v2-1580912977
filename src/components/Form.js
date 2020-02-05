import React, { Component } from "react";

class Form extends Component {
  state = {
    title: '',
    author: '',
    image: ''
  }

  
  handleTitle = (event) => {
    this.setState({title: event.target.value})
  }
  handleAuthor = (event) => {
    this.setState({author: event.target.value})
  }
  handleImage = (event) => {
    this.setState({image: event.target.value})
  }


  render() {
    return (
      <form onSubmit={this.props.handleSubmit.bind(this)}>
        <label>
          Title:
         <input type="text" name = "title" value={this.state.title} onChange={this.handleTitle} />
         </label>
         <label>
           Author:
         <input type="text" name = "author" value={this.state.author} onChange={this.handleAuthor} />
         </label>
         <label>
           Image URL:
         <input type="text" name = "image" value={this.state.image} onChange={this.handleImage} />
         </label>
         <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Form;
