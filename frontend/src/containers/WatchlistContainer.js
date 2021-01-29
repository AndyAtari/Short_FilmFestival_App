import React, { Component } from "react";
import { store } from "../store";
import Showcase from "../components/Showcase";
import Watchlist from "../components/Watchlist";

class WatchlistContainer extends Component {
  state = {
    watchlist: store.watchlist,
  };

  render() {
    return (
      <div>
        <h1>Watchlist</h1>
      </div>
    );
  }
}

export default WatchlistContainer;
