import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cleanliness = props => (
  <div>
    <p>Cleanliness: </p>
    <style jsx>
      {`
        .poop-outer {
          padding: 0;
          display: inline-block;
          position: relative;
          font-size: 11px;
        }

        .poop-outer::before {
          content: '\f2fe \f2fe \f2fe \f2fe \f2fe';
          color: #fff;
        }

        .poop-inner {
          position: absolute;
          top: 0;
          left: 0;
          white-space: nowrap;
          overflow: hidden;
          width: 0;
        }

        .poop-inner::before {
          content: '\f2fe \f2fe \f2fe \f2fe \f2fe';
          color: #6d5725;
        }
        `}
    </style>
    <div className="poop-outer fas">
      <div className="poop-inner fas" style={{width: props.cleanlinessLevel.toString() / 10 + '%'}}>
      </div>
      <p>{props.cleanlinessLevel}</p>
    </div>

  </div>
);

Cleanliness.propTypes = {
  cleanlinessLevel: PropTypes.number
};

export default Cleanliness;
