export const uploadVideo = (uploads) => {
  return {
    type: "UPLOAD_VIDEO",
    uploads: Object.assign({}, uploads),
  };
};

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
