import React, { Component } from "react";
import AnswerContainer from "../containers/AnswerContainer";

class Question extends Component {
  state = {
    showQuestion: true,
  };

  handleOnClick() {
    // this.props.deleteQuestion(this.props.question.id);
    this.setState({ showQuestion: !this.state.showQuestion });
  }
  render() {
    const { question } = this.props;

    return (
      <div>
        <li className="question-color">
          {this.state.showQuestion && question.title}{" "}
          {this.state.showQuestion && (
            <button onClick={() => this.handleOnClick()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="red"
                class="bi bi-dash-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
              </svg>
            </button>
          )}
          {!this.state.showQuestion && question.title}{" "}
          {!this.state.showQuestion && (
            <button onClick={() => this.handleOnClick()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="red"
                class="bi bi-plus-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </button>
          )}
          {this.state.showQuestion && <AnswerContainer question={question} />}
        </li>
      </div>
    );
  }
}

export default Question;
