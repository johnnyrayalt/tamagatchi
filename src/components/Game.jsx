import React from 'react';
import ButtonActions from './ButtonActions';
import Screen from './Screen';
import TamaLevels from './TamaLevels';

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tamagotchiStats: [
        {
          hunger: 100,
          happiness: 100,
          cleanliness: 100
        }
      ]
    };
    this.handleCleaningPet = this.handleCleaningPet.bind(this);
  }

  handleCleaningPet() {
    console.log('hi');
  }

  render () {
    return (
      <div >
        <h1>Game</h1>
        <TamaLevels hungerLevel={this.state.tamagotchiStats[0].hunger} happinessLevel={this.state.tamagotchiStats[0].happiness} cleanlinessLevel={this.state.tamagotchiStats[0].cleanliness} />
        <Screen />
        <ButtonActions requestCleanPet={this.state.tamagotchiStats}
          handleCleaningPet={this.handleCleaningPet} />
      </div>
    );
  }
}

export default Game;
