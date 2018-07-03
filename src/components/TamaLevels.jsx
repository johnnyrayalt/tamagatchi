import React from 'react';
import Hunger from './Hunger';
import Happiness from './Happiness';
import Cleanliness from './Cleanliness';
import PropTypes from 'prop-types';

const TamaLevels = (props) => (
  <div className="levelsContainer">
    <style jsx>
      {`
        .levelsContainer {
          width:100%;
        }
        .levelsSize {
          width:400px;
          border: 1px solid black;
          margin: auto;
        }
        `}
    </style>
    <div className="levelsSize">
      <Hunger hungerLevel={props.hungerLevel}/>
      <Happiness happinessLevel={props.happinessLevel}/>
      <Cleanliness cleanlinessLevel={props.cleanlinessLevel}/>
    </div>
  </div>
);

TamaLevels.propTypes = {
  hungerLevel: PropTypes.number,
  happinessLevel: PropTypes.number,
  cleanlinessLevel: PropTypes.number
};

export default TamaLevels;
