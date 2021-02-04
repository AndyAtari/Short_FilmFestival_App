import React, { Component } from "react";
import Showcase from "../components/Showcase";
import { connect } from "react-redux";
import Intro from "../components/Intro";
import { getVideos } from "../redux/actionCreator";

class HomeContainer extends Component {
  state = {
    showStory: false,
  };

  componentDidMount() {
    this.props.getVideos();
  }

  videoShowcase = () => {
    const { videos } = this.props;
    return videos.map((mov) => (
      <div className="movie-card">
        <Showcase mov={mov} />
      </div>
    ));
  };

  handleClick = (event) => {
    event.preventDefault();
    this.setState({ showStory: !this.state.showStory });
  };

  render() {
    return (
      <div className="show-title">
        <div className="intro">
          <a onClick={this.handleClick.bind(this)} href="*">
            <h1 className="story-link">The story so far ...</h1>
          </a>
          {this.state.showStory && <Intro />}
        </div>
        <h1>
          <u>Animator's Showcase</u>
        </h1>
        <div className="home">{this.videoShowcase()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  videos: state.videos,
});

export default connect(mapStateToProps, { getVideos })(HomeContainer);
