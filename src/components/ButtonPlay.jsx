import React from 'react';

const ButtonPlay = () => (
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
    <button className="btn">Play</button>
  </div>
);

export default ButtonPlay;
