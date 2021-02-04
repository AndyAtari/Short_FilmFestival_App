import React, { Component } from "react";

class QuestionAsked extends Component {
  state = {
    text: "",
  };

  handleOnChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addQuestion(this.state.text);
    this.setState({
      text: "",
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
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)}
          />
          <input className="submit" type="submit" value="Ask" />
        </form>
      </div>
    );
  }
}

export default QuestionAsked;
