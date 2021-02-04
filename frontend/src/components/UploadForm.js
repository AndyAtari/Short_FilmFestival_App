import React, { Component } from "react";

class UploadForm extends Component {
  state = {
    title: "",
    link: "",
  };

  handleOnChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    const upload = { ...this.state };
    this.props.uploadVideo(upload);
    this.setState({
      title: "",
      link: "",
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
              name="link"
              value={this.state.link}
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
