import React, { Component } from "react";
import Watchlist from "../components/Watchlist";
import Showcase from "../components/Showcase";
import TopMovies from "../components/TopMovies";

class HomeContainer extends Component {
  render() {
    return (
      <div className="home">
        <Watchlist />
        <Showcase />
        <TopMovies />
      </div>
    );
  }
}

export default HomeContainer;
