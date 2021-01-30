import React, { Component } from "react";
import Showcase from "../components/Showcase";
import TopMovies from "../components/TopMovies";
import { store } from "../store";
// import Watchlist from "../components/Watchlist";
import { connect } from "react-redux";

class HomeContainer extends Component {
  componentDidMount() {
    fetch("http://localhost:3000/movies")
      .then((resp) => resp.json())
      .then((videos) => {
        const newVideos = videos.map((video) => ({
          ...video,
          onList: false,
        }));
        this.props.setVideos(newVideos);
      });
  }

  addToWatchlist = (mov) => {
    store.watchlist.push(mov);
  };

  videoShowcase = () => {
    const { videos } = this.props;
    return videos.map((mov) => (
      <div className="movie-card">
        <Showcase mov={mov} />
        <div className="like-links">
          <button onClick={() => this.addToWatchlist(mov)}>
            Add to Watchlist
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

const mapStateToProps = (state) => ({
  videos: state.videos,
  watchList: state.watchList,
  offset: state.offset,
});

const mapDispatchToProps = (dispatch) => ({
  setVideos: (videos) => {
    dispatch({
      type: "SET_VIDEOS",
      payload: {
        videos: videos,
      },
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
