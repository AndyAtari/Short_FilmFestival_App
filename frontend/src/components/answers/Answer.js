import React, { Component } from "react";

class Answer extends Component {
  handleOnClick = () => {
    this.props.deleteAnswer(this.props.answer.id);
  };
  render() {
    const { answer } = this.props;

    return (
      <div>
        <li>{this.props.answer.text}</li>
        <button onClick={this.handleOnClick}>X</button>
      </div>
    );
  }
}

export default Answer;
