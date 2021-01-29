import React from "react";
import { store } from "../store";

class Showcase extends React.Component {
  render() {
    return (
      <div className="showcase">
        <h1>Showcase</h1>
        {this.videoShowcase()}
      </div>
    );
  }
}

export default Showcase;
