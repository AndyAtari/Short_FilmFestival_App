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
            <button onClick={() => this.addToWatchlist(mov)}>
              Add to Watchlist
            </button>
            <button>Best Live-Action</button>
            <button>Best Animated</button>
          </div>
        </div>
      );
    });

  render() {
    return (
      <div>
        <h1>Watchlist</h1>
        {this.renderWatchlist()}
      </div>
    );
  }
}

export default WatchlistContainer;
