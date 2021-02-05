import React, { Component } from "react";
import QuestionAsked from "../components/QuestionAsked";
import Questions from "../components/Questions";
import { connect } from "react-redux";

class QandAContainer extends Component {
  componentDidMount() {
    fetch("http://localhost:3000/questions")
      .then((resp) => resp.json())
      .then((questions) => {
        this.props.setQuestions(questions);
      });
  }

  render() {
    return (
      <div className="q-a">
        <h1>Filmmaker Q&A</h1>
        <QuestionAsked addQuestion={this.props.addQuestion} />
        <Questions
          questions={this.props.questions}
          deleteQuestion={this.props.deleteQuestion}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.questions,
});

const mapDispatchToProps = (dispatch) => ({
  addQuestion: (text) => dispatch({ type: "ADD_QUESTION", text }),
  deleteQuestion: (id) => dispatch({ type: "DELETE_QUESTION", id }),
  setQuestions: (questions) =>
    dispatch({ type: "SET_QUESTIONS", payload: { questions: questions } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(QandAContainer);
