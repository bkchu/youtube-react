import React, { Component } from 'react';
import ProgressButton from 'react-progress-button';
import '../../../node_modules/react-progress-button/react-progress-button.css';

class CopyButton extends Component {
  state = {
    buttonState: ''
  }

  handleClick = () => {
    this.setState({ buttonState: 'loading' })
    // make asynchronous call
    setTimeout(() => {
      this.setState({ buttonState: 'success' })
    }, 3000)
  }

  render() {
    return (
      <div>
        <ProgressButton onClick={this.handleClick} state={this.state.buttonState}>
          Go!
        </ProgressButton>
      </div>
    )
  }
}

export default CopyButton;