import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form onClick={(e) => this.props.submitHandler(e)}>
        <label>
        Name:
          <input type="text" name="name" value={this.props.value}/>
        </label>
          <br />
        <label>
        Author:
          <input type="text" name="author" value={this.props.value}/>
        </label>
          <br />     
        <label>
        Image URL:
          <input type="text" name="img" value={this.props.value}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Form;
