import React from 'react';
import ButtonActions from './ButtonActions';
import Screen from './Screen';
import TamaLevels from './TamaLevels';
import TamaDeath from './TamaDeath';

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tamagotchiStats: [
        {
          tamaDies: false,
          hunger: 1000,
          happiness: 1000,
          cleanliness: 0
        }
      ]
    };
    this.handleCleaningPet = this.handleCleaningPet.bind(this);
    this.handleStartLevelTick = this.handleStartLevelTick.bind(this);
    this.handleHungerPet = this.handleHungerPet.bind(this);
    this.handlePlayingPet = this.handlePlayingPet.bind(this);
  }

  componentDidMount() {
    setTimeout(this.handleStartLevelTick, 2000);
  }

  handleStartLevelTick() {
    this.setHungerCountDown = setInterval(() => this.handleHungerTicker(), 125);
    this.setHappinessCountDown = setInterval(()=> this.handleHappinessTicker(), 125);
    this.setCleanlinessCountDown = setInterval(()=> this.handleCleanlinessTicker(), 125);
  }

  handleHungerTicker() {
    let newTamagotchiStats = this.state.tamagotchiStats.slice();
    newTamagotchiStats[0].hunger--;
    this.setState({ tamagotchiStats: newTamagotchiStats });
    if (newTamagotchiStats[0].hunger <= 0) {
      newTamagotchiStats[0].hunger = 0;
      newTamagotchiStats[0].tamaDies = true;
      clearTimeout(this.setHappinessCountDown);
      clearTimeout(this.setCleanlinessCountDown);
    }
  }

  handleHappinessTicker() {
    let newTamagotchiStats = this.state.tamagotchiStats.slice();
    newTamagotchiStats[0].happiness--;
    this.setState({ tamagotchiStats: newTamagotchiStats });
    if (newTamagotchiStats[0].happiness <= 0) {
      newTamagotchiStats[0].happiness = 0;
      newTamagotchiStats[0].tamaDies = true;
      clearTimeout(this.setCleanlinessCountDown);
      clearTimeout(this.setHungerCountDown);
    }
  }

  handleCleanlinessTicker() {
    let newTamagotchiStats = this.state.tamagotchiStats.slice();
    newTamagotchiStats[0].cleanliness++;
    this.setState({ tamagotchiStats: newTamagotchiStats });
    if (newTamagotchiStats[0].cleanliness >= 1000) {
      newTamagotchiStats[0].cleanliness = 0;
      newTamagotchiStats[0].tamaDies = true;
      clearTimeout(this.setHungerCountDown);
      clearTimeout(this.setHappinessCountDown);
    }
  }

  handleHungerPet() {
    let newTamagotchiStats = this.state.tamagotchiStats.slice();
    newTamagotchiStats[0].hunger = 1000;
    this.setState({ tamagotchiStats: newTamagotchiStats });
  }

  handleCleaningPet() {
    let newTamagotchiStats = this.state.tamagotchiStats.slice();
    newTamagotchiStats[0].cleanliness = 0;
    this.setState({ tamagotchiStats: newTamagotchiStats });
  }

  handlePlayingPet() {
    let newTamagotchiStats = this.state.tamagotchiStats.slice();
    newTamagotchiStats[0].happiness = 1000;
    this.setState({ tamagotchiStats: newTamagotchiStats });
  }

  render () {
    let currentlyVisibleContent = null;
    if (this.state.tamagotchiStats[0].tamaDies === true) {
      currentlyVisibleContent = <TamaDeath />;
    } else {
      currentlyVisibleContent = <Screen />;
    }
    return (
      <div>
        <TamaLevels hungerLevel={this.state.tamagotchiStats[0].hunger} happinessLevel={this.state.tamagotchiStats[0].happiness} cleanlinessLevel={this.state.tamagotchiStats[0].cleanliness} />
        {currentlyVisibleContent}
        <ButtonActions requestCleanPet={this.state.tamagotchiStats}
          handleCleaningPet={this.handleCleaningPet}
          handleHungerPet={this.handleHungerPet}
          handlePlayingPet={this.handlePlayingPet} />
      </div>
    );
  }
}

export default Game;
