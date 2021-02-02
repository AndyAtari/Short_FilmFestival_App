const initialState = {
  videos: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_VIDEOS":
      return { ...state, videos: action.payload.videos };
    default:
      return { ...state };
  }
};
