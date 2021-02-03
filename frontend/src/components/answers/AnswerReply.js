import React, { Component } from "react";
import Answers from "./Answers";

class AnswerReply extends Component {
  state = {
    text: "",
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
