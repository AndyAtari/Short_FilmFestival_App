import React, { Component } from "react";
import Showcase from "../components/Showcase";
import TopMovies from "../components/TopMovies";
import { store } from "../store";
import Watchlist from "../components/Watchlist";

class HomeContainer extends Component {
  state = {
    videos: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/movies")
      .then((resp) => resp.json())
      .then((videos) => {
        const updatedVideos = videos.map((video) => ({
          ...video,
          onWatchlist: false,
        }));
        this.setState({ videos: updatedVideos });
      });
  }

  addToWatchlist = (mov) => {
    const updatedVideos = this.state.videos.map((video) => {
      if (video.id === mov.id) {
        return { ...video, onWatchlist: true };
      } else {
        return video;
      }
    });
    this.setState({ videos: updatedVideos });
    store.watchlist.push(mov);
  };

  videoShowcase = () => {
    return this.state.videos.map((mov) => (
      <div className="movie-card">
        <Showcase mov={mov} />
        <div className="like-links">
          {/* <button onClick={() => this.addToWatchlist(mov)}> */}
          <Watchlist mov={mov} />
          {/* // </button> */}
          {/* {mov.onWatchlist ? "Remove from Watchlist" : "Add to Watchlist"} */}

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
