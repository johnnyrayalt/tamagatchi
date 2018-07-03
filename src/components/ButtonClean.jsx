import React from 'react';
import PropTypes from 'prop-types';

const ButtonClean = (props) => {
  return(
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
      <button onClick={props.handleCleaningPet} className="btn">Clean</button>
    </div>
  );
};

ButtonClean.propTypes = {
  handleCleaningPet: PropTypes.func
};

export default ButtonClean;
