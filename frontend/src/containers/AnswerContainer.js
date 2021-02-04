import React, { Component } from "react";
import AnswerReply from "../components/answers/AnswerReply";
import Answers from "../components/answers/Answers";
import { connect } from "react-redux";

class AnswerContainer extends Component {
  render() {
    return (
      <div>
        <Answers
          answers={this.props.answers}
          questionId={this.props.question.id}
          deleteAnswer={this.props.deleteAnswer}
        />
        <AnswerReply
          addAnswer={this.props.addAnswer}
          questionId={this.props.question.id}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ answers }) => {
  return { answers };
};

const mapDispatchToProps = (dispatch) => ({
  addAnswer: (answer) => dispatch({ type: "ADD_ANSWER", answer }),
  deleteAnswer: (id) => dispatch({ type: "DELETE_ANSWER", id }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AnswerContainer);
