import React from 'react';
import PropTypes from 'prop-types';

const Hunger = props => (
  <div>
    <p>Hunger: <span>{props.hungerLevel}</span></p>
  </div>
);

Hunger.propTypes = {
  hungerLevel: PropTypes.number
};

export default Hunger;
