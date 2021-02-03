import React, { Component } from "react";
import Answers from "./Answers";

class AnswerReply extends Component {
  state = {
    text: "",
  };

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addAnswer({
      text: this.state.text,
      questionId: this.props.questionId,
    });
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>
            Reply:
            <textarea value={this.state.text} onChange={this.handleOnChange} />
          </label>
          <input type="submit" className="submit"></input>
        </form>
      </div>
    );
  }
}

export default AnswerReply;
