import React from 'react';
import PropTypes from 'prop-types';

const Happiness = props => (
  <div>
    <p>Happiness: <span>{props.happinessLevel}</span></p>
  </div>
);

Happiness.propTypes = {
  happinessLevel: PropTypes.number
};

export default Happiness;
