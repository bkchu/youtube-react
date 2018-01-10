import React from "react";
import VideoListItem from "./VideoListItem/VideoListItem";

const videoList = props => {
  const videos = props.videos.map(video => {
    return <VideoListItem key={video.etag} video={video} />;
  });

  return <div>{videos}</div>;
};

export default videoList;
