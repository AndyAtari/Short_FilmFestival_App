import React from "react";

const Showcase = (props) => {
  return (
    <div>
      <p>{props.mov.name}</p>
      <iframe
        width="700"
        height="393.75"
        src={props.mov.url}
        frameborder="0"
        allow="fullscreen"
        allowfullscreen
      ></iframe>
    </div>
  );
};
export default Showcase;
