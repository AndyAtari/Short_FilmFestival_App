const TopMovies = () => {
  return (
    <>
      <h1>Top Movies</h1>
      <div className="top-movies">
        <div className="best-animated">
          <h2>Best Animated goes to ...</h2>
          <img
            src="https://media.giphy.com/media/b7oBeRRXGEJva/giphy.gif"
            alt="finding-nemo"
          />
        </div>
        <div className="best-action">
          <h2>Best Live-Action goes to ...</h2>
          <img
            src="https://media.giphy.com/media/1qhzDBcH8qKGi4snKA/giphy.gif"
            alt="marvel"
          />
        </div>
      </div>
    </>
  );
};

export default TopMovies;
