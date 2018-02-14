import React, { Component } from "react";
import YTSearch from "youtube-search";
import "./App.css";

import SearchBar from "./components/SearchBar/SearchBar";
import VideoList from "./components/VideoList/VideoList";
import VideoDetail from "./components/VideoDetail/VideoDetail";
import Logo from "./components/UI/Logo/Logo";

const API_KEY = "AIzaSyAohiC3Og0p-HERyWlCF1Db1tvKiiz0Kj8";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      searchable: false
    };
  }

  onChangeHandler = val => {
    if (val.length > 1) {
      this.videoSearch(val);
      this.setState({ searchable: true });
    } else {
      this.setState({ searchable: false });
    }
  };

  clearSearchHandler = () => {
    this.setState({ searchable: false });
    this.searchbar.logoPressedHandler();
  };

  videoSearch(term) {
    const opts = {
      maxResults: 11,
      type: "video",
      key: API_KEY
    };
    YTSearch(term, opts, (err, videos) => {
      if (err) return console.log(err);
      if (this.state.searchable && videos.length !== 0) {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
      }
    });
  }

  render() {
    return (
      <div className="App container">
        <Logo clicked={this.clearSearchHandler} />
        <SearchBar
          ref={instance => (this.searchbar = instance)}
          clear={this.clearSearchHandler}
          changed={this.onChangeHandler}
        />
        <VideoDetail
          searchable={this.state.searchable}
          video={this.state.selectedVideo}
        />
        <VideoList
          searchable={this.state.searchable}
          clicked={selectedVideo => {
            this.videoSearch(selectedVideo.title);
          }}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
