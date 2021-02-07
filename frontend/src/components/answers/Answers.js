import React, { Component } from "react";
import Answer from "./Answer";

class Answers extends Component {
  render() {
    const { answers, questionId, deleteAnswer } = this.props;
    const associatedAnswers = answers.filter(
      (answer) => answer.question_id === questionId
    );

    const answerList = associatedAnswers.map((answer, index) => {
      return <Answer key={index} answer={answer} deleteAnswer={deleteAnswer} />;
    });
    return (
      <div>
        <ul className="answer-list">{answerList}</ul>
      </div>
    );
  }
}

export default Answers;
