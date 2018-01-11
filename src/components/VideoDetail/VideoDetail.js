import React from "react";
import moment from "moment";

const videoDetail = props => {
  if (!props.video) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  const { videoId } = props.video.id;
  const url = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  const content = props.video.snippet;
  let channelUrl = `https://www.youtube.com/channel/${content.channelId}`;

  return (
    <div className="VideoDetail">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          id={videoId}
          className="embed-responsive-item"
          title={content.title}
          src={url}
          frameBorder="0"
          allowFullScreen
        />
      </div>
      <p className="video-title">{content.title}</p>
      <a target="_blank" href={channelUrl}>
        {content.channelTitle}
      </a>
      <p>Published on {moment(content.publishedAt).format("MMM DD, YYYY")}</p>
      <p className="video-description">{content.description}</p>
    </div>
  );
};

export default videoDetail;
