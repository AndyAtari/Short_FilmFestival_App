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
      return {
        ...state,
        questions: [...state.questions, action.question],
      };

    case "SET_QUESTIONS":
      return { ...state, questions: action.payload.questions };

    case "DELETE_QUESTION":
      const questions = state.questions.filter(
        (question) => question.id !== action.id
      );
      return { ...state, questions };

    case "ADD_ANSWER":
      return { ...state, answers: [...state.answers, action.answer] };

    case "SET_ANSWERS":
      return { ...state, answers: action.payload.answers };

    case "DELETE_ANSWER":
      const answers = state.answers.filter((answer) => answer.id !== action.id);
      return { ...state, answers };

    case "UPLOAD_VIDEO":
      return {
        ...state,
        uploads: [...state.uploads, action.upload],
      };

    case "SET_UPLOADS":
      return { ...state, uploads: action.payload.uploads };
    default:
      return { ...state };
  }
};
