import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

const colors = [
  'transparent',
  '#FF0D72',
  '#0DC2FF',
  '#0DFF72',
  '#F538FF',
  '#FF8E0D',
  '#FFE138',
  '#3877FF'
];

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <svg
        viewBox={`0 0 ${this.props.game.width} ${this.props.game.height}`}
        width={`${this.props.game.width}px`}
        height={`${this.props.game.height}px`}
      >
        <g id="player">
          {this.drawMatrix(this.props.player.matrix, this.props.player.pos)}
        </g>
        <g id="board">
          {this.drawMatrix(this.props.game.matrix, { x: 0, y: 0 })}
        </g>
      </svg>
    );
  }
  drawMatrix(matrix, offset) {
    return matrix.map((row, y) => (
      <g key={y}>
        {row.map((value, x) => (
          <rect
            key={[y, x]}
            x={(x + offset.x) * this.props.game.cellSize}
            y={(y + offset.y) * this.props.game.cellSize}
            fill={colors[value]}
            width={this.props.game.cellSize}
            height={this.props.game.cellSize}
          />
        ))}
      </g>
    ));
  }
}

const mapStateToProps = ({ game, player }) => ({
  game,
  player
});

export default connect(mapStateToProps)(App);
