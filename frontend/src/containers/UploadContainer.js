import React, { Component } from "react";
import { connect } from "react-redux";
import UploadCard from "../components/uploads/UploadCard";
import { uploadVideo } from "../redux/actionCreator";

class UploadContainer extends Component {
  render() {
    const { uploads } = this.props;
    return (
      <div>
        <h1>Submit Your Animated Short Film</h1>
        <div>
          {uploads.map((upload) => (
            <UploadCard upload={upload} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    uploads: state.uploads,
  };
};

export default connect(mapStateToProps, { uploadVideo })(UploadContainer);
