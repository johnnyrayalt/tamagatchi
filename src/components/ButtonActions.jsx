import React from 'react';
import ButtonFeed from './ButtonFeed';
import ButtonPlay from './ButtonPlay';
import ButtonClean from './ButtonClean';
import PropTypes from 'prop-types';

const ButtonActions = (props) => {

  return(
    <div className='buttonContainer'>
      <ButtonFeed handleHungerPet={props.handleHungerPet} />
      <ButtonClean handleCleaningPet={props.handleCleaningPet} />
      <ButtonPlay handlePlayingPet={props.handlePlayingPet} />
      <style jsx>{`
          .buttonContainer {
            padding-top: 20px;
            display:flex;
            justify-content:space-around;
            width: 400px;
            margin:auto;
          }

          `}</style>
    </div>
  );
};

ButtonActions.propTypes = {
  handleHungerPet: PropTypes.func,
  handleCleaningPet: PropTypes.func,
  handlePlayingPet: PropTypes.func
};

export default ButtonActions;
