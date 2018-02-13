import React from "react";

const videoListItem = ({ first, video, clicked }) => {
  const content = video;
  const channelUrl = `https://www.youtube.com/channel/${content.channelId}`;


  const thumbnail = (
    <img
      className="video-thumbnail"
      src={content.thumbnails.default.url}
      alt={content.title}
    />
  )

  const description = (
    <div className="video-text-content">
      <p className="video-title">{content.title}</p>
      <a target="_blank" href={channelUrl}>
        {content.channelTitle}
      </a>
    </div>
  )

  return (
    <div>
      <div className="VideoListItem" onClick={() => clicked(video)}>
        {thumbnail}
        {description}
      </div>
    </div>
  );
};

export default videoListItem;
