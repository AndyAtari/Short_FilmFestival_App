import React, { Component } from "react";
import { connect } from "react-redux";
import { uploadVideo } from "../redux/actionCreator";

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
          <input
            type="text"
            placeholder="Title of Short Film"
            name="title"
            value={this.state.title}
            onChange={this.handleOnChange}
          />
          <input
            type="text"
            placeholder="Embeded Url of Film"
            name="link"
            value={this.state.link}
            onChange={this.handleOnChange}
          />
          <button type="submit">Submit For Consideration</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { uploadVideo })(UploadForm);
