import React, { Component } from "react";
import Showcase from "../components/Showcase";
import QandA from "../components/QandA";

class QandAContainer extends Component {
  state = {};

  // renderWatchlist = () =>
  //   this.state.watchlist.map((mov) => {
  //     return (
  //       <div className="movie-card">
  //         <Showcase mov={mov} />
  //         <div className="like-links">
  //           <button>Remove From Watchlist</button>
  //         </div>
  //       </div>
  //     );
  //   });

  render() {
    return (
      <div>
        <h1>Filmmaker Q&A</h1>
      </div>
    );
  }
}

export default QandAContainer;
