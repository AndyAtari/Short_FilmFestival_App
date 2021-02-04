import cuid from "cuid";
export const cuidFn = cuid;

const initialState = {
  videos: [],
  questions: [],
  answers: [],
  uploads: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_VIDEOS":
      return { ...state, videos: action.payload.videos };
    case "ADD_QUESTION":
      const question = { text: action.text, id: cuidFn() };
      return {
        ...state,
        questions: [...state.questions, question],
      };
    case "DELETE_QUESTION":
      const questions = state.questions.filter(
        (question) => question.id !== action.id
      );
      return { ...state, questions };
    case "ADD_ANSWER":
      const answer = {
        text: action.answer.text,
        questionId: action.answer.questionId,
        id: cuidFn(),
      };
      return { ...state, answers: [...state.answers, answer] };
    case "DELETE_ANSWER":
      const answers = state.answers.filter((answer) => answer.id !== action.id);
      return { ...state, answers };
    case "UPLOAD_VIDEO":
      const newVideo = { text: action.text };
      return {
        ...state,
        uploads: [...state.uploads, newVideo],
      };

    default:
      return { ...state };
  }
};
