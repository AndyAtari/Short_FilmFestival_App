import React, { Component } from "react";
import { store } from "../store";
import Showcase from "../components/Showcase";
import Watchlist from "../components/Watchlist";

class WatchlistContainer extends Component {
  state = {
    watchlist: store.watchlist,
  };

  renderWatchlist = () =>
    this.state.watchlist.map((mov) => {
      return (
        <div className="movie-card">
          <Showcase mov={mov} />
          <div className="like-links">
            <button>Remove From Watchlist</button>
          </div>
        </div>
      );
    });

  render() {
    return (
      <div>
        <h1>Submissions</h1>
        {this.renderWatchlist()}
      </div>
    );
  }
}

export default WatchlistContainer;
