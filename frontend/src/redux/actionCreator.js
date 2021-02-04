export const getVideos = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/movies")
      .then((resp) => resp.json())
      .then((videos) => {
        dispatch({
          type: "SET_VIDEOS",
          payload: {
            videos: videos,
          },
        });
      });
  };
};
