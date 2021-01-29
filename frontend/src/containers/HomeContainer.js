import React, { Component } from "react";
import Showcase from "../components/Showcase";
import TopMovies from "../components/TopMovies";
import { store } from "../store";

class HomeContainer extends Component {
  state = {
    videos: [],
    hasbeenClicked: false,
  };

  componentDidMount() {
    fetch("http://localhost:3000/movies")
      .then((resp) => resp.json())
      .then((videos) => {
        this.setState({ videos });
      });
  }

  addToWatchlist = (mov) => {
    store.watchlist.push(mov);
    this.setState((previousState) => {
      return {
        hasbeenClicked: !previousState.hasbeenClicked,
      };
    });
  };

  videoShowcase = () => {
    return this.state.videos.map((mov) => (
      <div className="movie-card">
        <Showcase mov={mov} />
        <div className="like-links">
          <button onClick={() => this.addToWatchlist(mov)}>
            {this.state.hasbeenClicked
              ? "Remove from Watchlist"
              : "Add to Watchlist"}
          </button>
          <button>Best Live-Action</button>
          <button>Best Animated</button>
        </div>
      </div>
    ));
  };

  render() {
    return (
      <div className="home">
        <TopMovies />
        {this.videoShowcase()}
      </div>
    );
  }
}

export default HomeContainer;
