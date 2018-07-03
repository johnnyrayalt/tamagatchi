import React from 'react';
import ButtonFeed from './ButtonFeed';

class Game extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <div>
        <h1>Game</h1>
        <ButtonFeed />
      </div>
    );
  }
}

export default Game;
