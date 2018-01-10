import React from "react";

const videoListItem = ({ video }) => {
  let content = video.snippet;
  return (
    <div>
      <img src={content.thumbnails.medium.url} alt={content.title} />
      <h2>{video.snippet.title}</h2>
      <h3>{video.snippet.description}</h3>
    </div>
  );
};

export default videoListItem;
