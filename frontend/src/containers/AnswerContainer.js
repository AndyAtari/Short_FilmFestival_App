import React, { Component } from "react";
import QuestionAsked from "../components/QuestionAsked";
import Questions from "../components/Questions";
import { connect } from "react-redux";

class AnswerContainer extends Component {
  render() {
    return (
      <div>
        <AnswerReply
          addAnswer={this.props.addAnswer}
          questionId={this.props.question.id}
        />
        <Answers
          answers={this.props.answers}
          answerId={this.props.answer.id}
          deleteAnswer={this.props.deleteAnswer}
        />
      </div>
    );
  }
}
