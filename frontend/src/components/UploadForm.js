import React, { Component } from "react";

class UploadForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      src: "",
    };

    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    let bodyData = this.state;
    fetch("http://localhost:3000/uploads", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(bodyData),
    })
      .then((resp) => resp.json())
      .then((upload) => {
        this.props.uploadVideo(upload);
      });

    this.setState({
      title: "",
      src: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <input
              type="text"
              placeholder="Title of Short Film"
              name="title"
              value={this.state.title}
              onChange={this.handleOnChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Embeded Url of Film"
              name="src"
              value={this.state.src}
              onChange={this.handleOnChange}
            />
          </div>
          <button className="submit" type="submit">
            Submit For Consideration
          </button>
        </form>
      </div>
    );
  }
}

export default UploadForm;
