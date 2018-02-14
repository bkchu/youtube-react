import React from "react";
import VideoListItem from "./VideoListItem/VideoListItem";

const videoList = props => {
  let canShow = props.searchable;
  let videos = null;

  let isOnlyOneVideo = props.videos.length === 1;

  if (canShow) {
    videos = props.videos.map((video, i) => {
      return (
        <div key={video.id}>
          {i === 0 ?
            null :
            (<VideoListItem clicked={props.clicked} video={video} />)
          }
        </div>
      );
    });
  }
  return (
    <div className="VideoList">
      {(canShow && !isOnlyOneVideo) && (<p>Related Videos</p>)}
      {videos}
    </div>
  )
};

export default videoList;
