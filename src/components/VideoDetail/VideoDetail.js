import React, { Component } from "react";
import moment from "moment";
import { CopyToClipboard } from "react-copy-to-clipboard";

class videoDetail extends Component {
  render() {
    if (!this.props.video || !this.props.searchable) {
      return <div className="loading" />;
    }
    const videoId = this.props.video.id;
    const url = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    const noEmbedUrl = `https://www.youtube.com/watch?v=${videoId}`;
    const content = this.props.video;
    let channelUrl = `https://www.youtube.com/channel/${content.channelId}`;

    return (
      <div className="VideoDetail">
        <div className="video-container embed-responsive embed-responsive-16by9">
          <iframe
            id={videoId}
            className="embed-responsive-item"
            title={content.title}
            src={url}
            frameBorder="0"
            allowFullScreen
          />
        </div>

        <CopyToClipboard text={noEmbedUrl}>
          <button className="button-copy">Click to copy video link.</button>
        </CopyToClipboard>

        <p className="video-title">{content.title}</p>
        <div className="description">
          <a target="_blank" href={channelUrl}>
            {content.channelTitle}
          </a>
          <p>
            Published on {moment(content.publishedAt).format("MMM DD, YYYY")}
          </p>
          <p className="video-description">{content.description}</p>
        </div>
      </div>
    );
  }
}

export default videoDetail;
