import React, { Component } from "react";

class QuestionAsked extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
    };

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    let bodyData = this.state;
    fetch("http://localhost:3000/questions", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(bodyData),
    }).then((resp) => resp.json());

    this.props.addQuestion(bodyData);
    this.setState({
      title: "",
    });
  }

  render() {
    return (
      <div className="question-submit">
        <i class="bi bi-question-circle-fill"></i>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            placeholder="Q:"
            value={this.state.title}
            onChange={(event) => this.handleOnChange(event)}
          />
          <input className="submit" type="submit" value="Ask" />
        </form>
      </div>
    );
  }
}

export default QuestionAsked;
