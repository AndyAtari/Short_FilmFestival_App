import React from "react";

class Showcase extends React.Component {
  videoShowcase = () => {
    return this.props.videos.map((mov) => (
      <div className="movie-card">
        <div>
          <img key={mov.id} src={mov.url} alt={mov.id} />
        </div>
        <div className="like-links">
          <button>Add to Watchlist</button>
          <button>Best Live-Action</button>
          <button>Best Animated</button>
        </div>
      </div>
    ));
  };

  render() {
    return (
      <div className="showcase">
        <h1>Showcase</h1>
        {this.videoShowcase()}
      </div>
    );
  }
}

export default Showcase;
