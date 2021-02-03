import React, { Component } from "react";
import QuestionAsked from "../components/QuestionAsked";
import Questions from "../components/Questions";
import { connect } from "react-redux";

class QandAContainer extends Component {
  render() {
    return (
      <div>
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

const mapStateToProps = (state) => ({ questions: state.questions });

const mapDispatchToProps = (dispatch) => ({
  addQuestion: (text) => dispatch({ type: "ADD_QUESTION", text }),
  deleteQuestion: (id) => dispatch({ type: "DELETE_QUESTION", id }),
});

export default connect(mapStateToProps, mapDispatchToProps)(QandAContainer);
