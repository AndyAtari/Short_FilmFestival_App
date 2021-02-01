const TopMovies = (props) => {
  return (
    <div className="top-movies">
      <div>
        <p>{props.videos.name}</p>
        <iframe
          width="800"
          height="449.999999"
          src={props.videos.url}
          frameborder="0"
          allow="fullscreen"
          allowfullscreen
        />
      </div>
    </div>
  );
};

export default TopMovies;
