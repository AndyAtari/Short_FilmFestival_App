import React, { Component } from "react";
import Question from "./Question";

class Questions extends Component {
  render() {
    const { questions, deleteQuestion } = this.props;
    const questionList = questions.map((question) => {
      return (
        <Question
          key={question.id}
          question={question}
          deleteQuestion={deleteQuestion}
        />
      );
    });

    return <ol className="question-list">{questionList}</ol>;
  }
}

export default Questions;
