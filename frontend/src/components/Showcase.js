import React from "react";

const Showcase = (props) => {
  return (
    <div>
      <img key={props.id} src={props.mov.url} alt={props.id} />
    </div>
  );
};
export default Showcase;
