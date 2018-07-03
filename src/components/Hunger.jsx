import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Hunger = props => (
  <div className="hunger">
    <style jsx>
      {`
        .hearts-outer {
          padding: 0;
          display: inline-block;
          position: relative;
          font-size: 11px;
        }

        .hearts-outer::before {
          content: '\f179 \f179 \f179 \f179 \f179';
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
          content: '\f179 \f179 \f179 \f179 \f179';
          color: #7eb797;
        }
      `}
    </style>
    <p>Hunger</p>
    <div className="hearts-outer fab">
        <div className="hearts-inner fab" style={{width: props.hungerLevel.toString() / 10 + '%'}}></div>
        <p>{props.hungerLevel}</p>
    </div>
  </div>
);

Hunger.propTypes = {
  hungerLevel: PropTypes.number
};

export default Hunger;
