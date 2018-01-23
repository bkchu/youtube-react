import React, { Component } from "react";

class searchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };
  }

  onInputChange(term) {
    if (term !== "") {
      this.props.changed(term);
    }
    this.setState({ term: term });
  }

  onClickHandler = () => {
    this.setState({ term: "" });
    this.props.clear();
  };

  render() {
    return (
      <div className="SearchBar">
        <input
          type="text"
          onChange={event => this.onInputChange(event.target.value)}
          value={this.state.term}
          placeholder="Type here to search."
        />
        <button
          onClick={this.onClickHandler}
          type="button"
          className="close button-clear"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
}

export default searchBar;
