import React, { Component } from "react";

class AnswerReply extends Component {
  constructor() {
    super();
    this.state = {
      content: "",
      question_id: null,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange = (event) => {
    this.setState({
      content: event.target.value,
      question_id: this.props.questionId,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    let bodyData = this.state;
    fetch("http://localhost:3000/answers", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(bodyData),
    }).then((resp) => resp.json());

    this.props.addAnswer(bodyData);
    this.setState({
      content: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>
            <i class="bi bi-chat-text-fill"></i>
          </label>
          <input
            type="text"
            placeholder="A:"
            value={this.state.content}
            onChange={this.handleOnChange}
          />

          <input type="submit" className="submit" value="Answer"></input>
        </form>
      </div>
    );
  }
}

export default AnswerReply;
