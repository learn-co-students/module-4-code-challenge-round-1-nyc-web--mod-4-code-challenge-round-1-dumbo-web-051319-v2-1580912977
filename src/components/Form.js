import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={event => this.props.bookPostSubmit(event)}>
        <label>Title: </label>
        <input type="text" name="title" value={this.props.title} onChange={event => this.props.bookFormHandle(event)}/>
        <label>Author: </label>
        <input type="text" name="author" value={this.props.author} onChange={event => this.props.bookFormHandle(event)}/>
        <label>Image URL: </label>
        <input type="text" name="img" value={this.props.img} onChange={event => this.props.bookFormHandle(event)}/>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default Form;
