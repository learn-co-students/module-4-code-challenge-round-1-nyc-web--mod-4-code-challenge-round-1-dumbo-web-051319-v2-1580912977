import React from "react";

class Form extends React.Component {

  
  render() {
    let book = {
      title: this.props.title,
      author: this.props.author,
      img: this.props.img,
      // id: this.props.title
    }
    return (
    <form onSubmit={(e) => this.props.submitHandler(e, book)}>
      <input className='title' placeholder='Title' name='title' value={this.props.title} onChange={this.props.changeHandler}/>
      <input className='author' placeholder='Author' name='author' value={this.props.author} onChange={this.props.changeHandler}/>
      <input className='img' placeholder='Image Url' name='img' value={this.props.img} onChange={this.props.changeHandler}/>
      <input type='submit' value='Add New Book'/>
    </form>
    )
  }
}

export default Form;
