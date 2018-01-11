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
    this.setState({ term });
  }

  render() {
    return (
      <div className="SearchBar">
        <input
          type="text"
          onChange={event => this.onInputChange(event.target.value)}
          value={this.state.term}
          placeholder="Search YouTube"
        />
      </div>
    );
  }
}

export default searchBar;
