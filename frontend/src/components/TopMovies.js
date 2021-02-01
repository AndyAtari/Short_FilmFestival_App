const TopMovies = (props) => {
  return (
    <div className="top-movies">
      <div>
        <p>{props.videos.name}</p>
        <iframe
          width="560"
          height="315"
          src={props.videos.url}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default TopMovies;
