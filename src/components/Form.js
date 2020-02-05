import React from "react";

class Form extends React.Component {

  state = {
    title: "",
    img: "", 
    author: "", 
  }

changeHandler = (e)=>{
  // console.log(e.target.name)
  // console.log(e.target.value)
  this.setState({title: e.target.value})

  //I know there's a much drier way to do this, but you know how code challenges are
}
imageChangeHandler=(e)=>{
  this.setState({ img: e.target.value })
}

  authorChangeHandler = (e) => {
    this.setState({ author: e.target.value })
  }

  submitHelper=(e)=>{
    e.preventDefault()
    this.props.handleSubmit(this.state)
    console.log("helped")
  }
  render() {
    // console.log(this.state)
    return <form onSubmit = {this.submitHelper}>
      <input name="title" type='text' value={this.state.name} onChange={this.changeHandler} placeholder="Add Title Here"/>
      <input name = "image" type='text' value = {this.state.image} onChange = {this.imageChangeHandler} placeholder="Drop and image, yo"/>
      <input name = "author" type='text' value = {this.state.author} onChange = {this.authorChangeHandler} placeholder="Who Wrote it?"/>
      <input type="submit" value="Submit" />
    </form >;
  }
}

export default Form;
