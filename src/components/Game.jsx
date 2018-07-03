import React from 'react';
import ButtonActions from './ButtonActions';
import Screen from './Screen';

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hunger: 0,
      happiness: 0,
      cleanliness: 0
    };
  }

  render () {
    return (
      <div>
        <h1>Game</h1>
        <Screen />
        <ButtonActions />
      </div>
    );
  }
}

export default Game;
