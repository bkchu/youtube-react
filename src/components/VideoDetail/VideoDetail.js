import React from "react";

const videoDetail = props => {
  if (!props.video) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  const { videoId } = props.video.id;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div>
      <iframe
        title={props.video.snippet.title}
        src={url}
        frameBorder="0"
        allowFullScreen
      />
      <h2>{props.video.snippet.title}</h2>
      <h4>{props.video.snippet.description}</h4>
    </div>
  );
};

export default videoDetail;
