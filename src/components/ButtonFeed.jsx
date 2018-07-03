import React from 'react';
import PropTypes from 'prop-types';

const ButtonFeed = props => (
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
    <button onClick={props.handleHungerPet} className="btn">Feed</button>
  </div>
);

ButtonFeed.propTypes = {
  handleHungerPet: PropTypes.func
};

export default ButtonFeed;
