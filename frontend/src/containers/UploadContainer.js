import React, { Component } from "react";
import { connect } from "react-redux";
import UploadForm from "../components/UploadForm";
import UploadCard from "../components/uploads/UploadCard";

class UploadContainer extends Component {
  componentDidMount() {
    fetch("http://localhost:3000/uploads")
      .then((resp) => resp.json())
      .then((uploads) => {
        this.props.setUploads(uploads);
      });
  }
  render() {
    const { uploads } = this.props;
    return (
      <div>
        <h1>Submit Your Animated Short Film</h1>
        <div className="upload-form">
          <UploadForm uploadVideo={this.props.uploadVideo} />
        </div>
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

const mapDispatchToProps = (dispatch) => ({
  uploadVideo: (upload) => dispatch({ type: "UPLOAD_VIDEO", upload }),
  setUploads: (uploads) =>
    dispatch({ type: "SET_UPLOADS", payload: { uploads: uploads } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadContainer);
