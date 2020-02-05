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
          <div className="form-group">
            <input className="form-control form-control-sm" onChange={this.changehandler} value={this.state.title} type="text" name="title" placeholder="Title" />
            <input className="form-control form-control-sm" onChange={this.changehandler} value={this.state.author} type="text" name="author" placeholder="Author" />
            <input className="form-control form-control-sm" onChange={this.changehandler} value={this.state.img} type="text" name="img" placeholder="Image URL" />
          
       </div>
            <button className="btn btn-sm btn-outline-success" onClick={this.submitHandler} type="submit" >Add to List</button>
        </form>
        <hr />
      </div>
    )
  }
}

export default Form;
