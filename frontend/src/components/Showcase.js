import React from "react";

const Showcase = (props) => {
  return (
    <div>
      <p>{props.mov.name}</p>
      <iframe
        width="560"
        height="315"
        src={props.mov.url}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};
export default Showcase;
