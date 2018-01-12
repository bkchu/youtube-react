import React, { Component } from "react";
import YTSearch from "youtube-api-search";
import "./App.css";

import SearchBar from "./components/SearchBar/SearchBar";
import VideoList from "./components/VideoList/VideoList";
import VideoDetail from "./components/VideoDetail/VideoDetail";

const API_KEY = "AIzaSyDG9v7qTKWnHybipytBhhclhBSwyukl6zM";

class App extends Component {
  constructor(props) {
    super(props);

    this.videoSearch("");

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

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      if (this.state.searchable) {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar changed={this.onChangeHandler} />
        <VideoDetail
          searchable={this.state.searchable}
          video={this.state.selectedVideo}
        />
        <VideoList
          searchable={this.state.searchable}
          clicked={selectedVideo => {
            YTSearch(
              { key: API_KEY, term: selectedVideo.snippet.title },
              videos => {
                this.setState({ videos: videos, selectedVideo: selectedVideo });
              }
            );
          }}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
