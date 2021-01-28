import React, { Component } from "react";
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
        <TopMovies />
        <Showcase videos={this.state.videos} />
      </div>
    );
  }
}

export default HomeContainer;
