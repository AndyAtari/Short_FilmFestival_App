const TopMovies = (props) => {
  return (
    <div className="top-movies">
      <div>
        <p>{props.videos.name}</p>
        <img key={props.id} src={props.videos.url} alt={props.id} />
      </div>
    </div>
  );
};

export default TopMovies;
