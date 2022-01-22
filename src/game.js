import React from 'react';
import './index.css';
import Board from './board'
import CalculateWinner from './CalculateWinner';

class Game extends React.Component {
    render() {
        return (
        <div className="game">
            <div className="game-board">
            <Board />
            </div>
            <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
            </div>
        </div>
    );
    }
}

export default Game;