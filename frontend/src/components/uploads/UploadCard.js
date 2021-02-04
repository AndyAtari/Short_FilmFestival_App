import React from "react";

const UploadCard = (upload) => {
  return (
    <div>
      <p>{upload.upload.text.title}</p>
      <iframe
        width="560"
        height="315"
        src={upload.upload.text.link}
        frameborder="0"
        allow="fullscreen"
        allowfullscreen
      ></iframe>
    </div>
  );
};
{
}
export default UploadCard;
