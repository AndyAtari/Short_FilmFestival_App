import React, { Component } from "react";
import Heart from "../components/Heart";

class Button extends Component {
  state = {
    heart: false,
  };

  handleClick = () => {
    this.setState({
      heart: !this.state.heart,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.heart ? "Remove Heart :(" : "Add a Heart!"}
        </button>
        {this.state.heart && <Heart />}
      </div>
    );
  }
}

export default Button;
