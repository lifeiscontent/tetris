import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import PlayerMatrix from './containers/PlayerMatrix';
import GameMatrix from './containers/GameMatrix';
import { movePlayerDown, movePlayerLeft, movePlayerRight } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown, false);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown, false);
  }
  render() {
    return (
      <svg
        viewBox={this.props.viewBox}
        width={this.props.width}
        height={this.props.height}
      >
        <PlayerMatrix />
        <GameMatrix />
      </svg>
    );
  }
  handleKeyDown(event) {
    switch (event.key) {
      case 'ArrowRight':
        return this.props.movePlayerRight();
      case 'ArrowLeft':
        return this.props.movePlayerLeft();
      case 'ArrowDown':
        return this.props.movePlayerDown();
      default:
        return false;
    }
  }
}

const mapStateToProps = ({ game: { viewBox, width, height } }) => ({
  viewBox,
  width,
  height
});

export default connect(mapStateToProps, {
  movePlayerDown,
  movePlayerLeft,
  movePlayerRight
})(App);
