import React from 'react';
import PropTypes from 'prop-types';

const ButtonClean = (props) => {

  function handleClick() {
    props.handleCleaningPet(props.happiness);
  }
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
      <button onClick={handleClick} className="btn">Clean</button>
    </div>
  );
};

ButtonClean.propTypes = {
  handleCleaningPet: PropTypes.func,
  happiness: PropTypes.number
};

export default ButtonClean;
