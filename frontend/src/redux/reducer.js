import cuid from "cuid";
export const cuidFn = cuid;

const initialState = {
  videos: [],
  questions: [],
  answers: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_VIDEOS":
      return { ...state, videos: action.payload.videos };
    default:
      return { ...state };
  }
};
