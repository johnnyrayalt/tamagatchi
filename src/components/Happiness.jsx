import React from 'react';
import PropTypes from 'prop-types';

const Happiness = props => (
  <div>
    <style jsx>
      {`
        .hearts-outer {
          padding: 0;
          display: inline-block;
          position: relative;
          font-size: 11px;
        }

        .hearts-outer::before {
          content: '\f004 \f004 \f004 \f004 \f004';
          color: #fff;
        }

        .hearts-inner {
          position: absolute;
          top: 0;
          left: 0;
          white-space: nowrap;
          overflow: hidden;
          width: 0;
        }

        .hearts-inner::before {
          content: '\f004 \f004 \f004 \f004 \f004';
          color: #007D8C;
        }
      `}
    </style>
    <p>Happiness</p>
    <div className="hearts-outer far">
        <div className="hearts-inner fa" style={{width: props.happinessLevel.toString() / 10 + '%'}}></div>
        <p>{props.happinessLevel}</p>
    </div>

  </div>
);

Happiness.propTypes = {
  happinessLevel: PropTypes.number
};

export default Happiness;
