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

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("learning React");
  }

  onChangeHandler = val => {
    this.videoSearch(val);
  };

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar changed={this.onChangeHandler} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          clicked={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
