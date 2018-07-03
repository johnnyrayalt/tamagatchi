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
          width: 100%;

        }
        .levelsSize {
          display: flex;
          justify-content: space-around;
          width: 400px;

          margin: auto;
          padding: 8px;
        }
        `}
    </style>
    <div className="levelsSize">
      <Hunger hungerLevel={props.hungerLevel}/>
      <Cleanliness cleanlinessLevel={props.cleanlinessLevel}/>
      <Happiness happinessLevel={props.happinessLevel}/>
    </div>
  </div>
);

TamaLevels.propTypes = {
  hungerLevel: PropTypes.number,
  happinessLevel: PropTypes.number,
  cleanlinessLevel: PropTypes.number
};

export default TamaLevels;
