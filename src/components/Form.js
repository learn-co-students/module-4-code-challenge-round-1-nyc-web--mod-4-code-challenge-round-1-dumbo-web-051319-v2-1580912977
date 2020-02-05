import React from "react";

let API = "http://localhost:3005/books"

class Form extends React.Component {

  state = {
    title: "",
    author: "",
    img: ""
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()

    fetch(API, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then(resp => resp.json())
    .then(book => this.props.addBook(book))
  }

  render() {
    // console.log(this.state)
    return (
      <div>
        <h3>Add a Book</h3>
        <form>
          <input type="text" placeholder="Title" name="title" onChange={e => this.changeHandler(e)} value={this.state.title}/>
          <input type="text" placeholder="Author" name="author" onChange={e => this.changeHandler(e)} value={this.state.author}/>
          <input type="text" placeholder="Image Url" name="img" onChange={e => this.changeHandler(e)} value={this.state.img}/>
          <input type="submit" value="Submit Book" onClick={e => this.submitHandler(e)}/>
        </form>
      </div>
    )
  }
}

export default Form;
