import React from "react";
import VideoListItem from "./VideoListItem/VideoListItem";

const videoList = props => {
  const videos = props.videos.map(video => {
    return (
      <div key={video.etag}>
        <VideoListItem clicked={props.clicked} video={video} />
      </div>
    );
  });

  return <div className="VideoList">{videos}</div>;
};

export default videoList;
