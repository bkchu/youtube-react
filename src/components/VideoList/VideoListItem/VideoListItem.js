import React from "react";

const videoListItem = ({ video, clicked }) => {
  let content = video;
  let channelUrl = `https://www.youtube.com/channel/${content.channelId}`;
  return (
    <div className="VideoListItem" onClick={() => clicked(video)}>
      <img
        className="video-thumbnail"
        src={content.thumbnails.default.url}
        alt={content.title}
      />
      <div className="video-text-content">
        <p className="video-title">{content.title}</p>
        <a target="_blank" href={channelUrl}>
          {content.channelTitle}
        </a>
      </div>
    </div>
  );
};

export default videoListItem;
