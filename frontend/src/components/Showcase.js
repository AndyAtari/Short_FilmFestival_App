// const Showcase = (props) => {
//   return (
//     <div className="showcase">
//       <h1>Showcase</h1>
//       <div>
//         <img src={props.videos}></img>
//       </div>
//     </div>
//   );
// };

// export default Showcase;

import React from "react";

class Showcase extends React.Component {
  videoShowcase = () => {
    return this.props.videos.map((mov) => (
      <img key={mov.id} src={mov.url} alt={mov.id} />
    ));
  };

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
