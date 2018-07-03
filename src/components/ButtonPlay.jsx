import React from 'react';
import PropTypes from 'prop-types';

const ButtonPlay = props => (
  <div>
    <style jsx>
      {`
        .btn {
          padding: 10px 12px;
          background-color: coral;
          color: white;
          border: none;
          border-radius: 7px;
        }
      `}
    </style>
    <button onClick={props.handlePlayingPet} className="btn">Play</button>
  </div>
);

ButtonPlay.propTypes = {
  handlePlayingPet: PropTypes.func
}

export default ButtonPlay;
