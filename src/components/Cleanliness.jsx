import React from 'react';
import PropTypes from 'prop-types';

const Cleanliness = props => (
  <div>
    <p>Cleanliness: <span>{props.cleanlinessLevel}</span></p>
  </div>
);

Cleanliness.propTypes = {
  cleanlinessLevel: PropTypes.number
};

export default Cleanliness;
