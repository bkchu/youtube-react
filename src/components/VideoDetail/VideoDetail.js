import React, { Component } from "react";
import moment from "moment";
import { CopyToClipboard } from "react-copy-to-clipboard";
import CopyButton from '../CopyButton/CopyButton';

class videoDetail extends Component {

  handleClick(e) {
    e.target.innerText = "Copied!";
    setTimeout(() => {
      console.log("Hello world");


    }, 1000);

  }

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
          <button className="button-copy" onClick={(e) => this.handleClick(e)}>Click to copy video link.</button>
        </CopyToClipboard>
        <CopyButton></CopyButton>

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
