import React from 'react';
import ButtonFeed from './ButtonFeed';
import ButtonPlay from './ButtonPlay';
import ButtonClean from './ButtonClean';
import PropTypes from 'prop-types';

const ButtonActions = (props) => {

  return(
    <div requestCleanPet={props.requestCleanPet} handleCleaningPet={this.handleCleaningPet} className='buttonContainer'>
      <ButtonFeed />
      <ButtonClean />
      <ButtonPlay />
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
  requestCleanPet: PropTypes.array,
  handleCleaningPet: PropTypes.func
};

export default ButtonActions;
