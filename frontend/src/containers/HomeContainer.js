import React, { Component } from "react";
import Watchlist from "../components/Watchlist";
import Showcase from "../components/Showcase";
import TopMovies from "../components/TopMovies";

class HomeContainer extends Component {
  state = {
    videos: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/movies")
      .then((resp) => resp.json())
      .then((videos) => {
        this.setState({ videos });
      });
  }

  render() {
    return (
      <div className="home">
        <Watchlist />
        <Showcase videos={this.state.videos} />
        <TopMovies />
      </div>
    );
  }
}

export default HomeContainer;
