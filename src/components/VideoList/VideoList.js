import React from "react";
import VideoListItem from "./VideoListItem/VideoListItem";

const videoList = props => {
  let canShow = props.searchable;
  let videos = null;
  if (canShow) {
    videos = props.videos.map(video => {
      return (
        <div key={video.id}>
          <VideoListItem clicked={props.clicked} video={video} />
        </div>
      );
    });
  }

  return <div className="VideoList">{videos}</div>;
};

export default videoList;
