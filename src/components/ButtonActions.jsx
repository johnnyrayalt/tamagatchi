import React from 'react';
import ButtonFeed from './ButtonFeed';
import ButtonPlay from './ButtonPlay';
import ButtonClean from './ButtonClean';

const ButtonActions = () => (
  <div className='buttonContainer'>
    <ButtonFeed />
    <ButtonClean />
    <ButtonPlay />
    <style jsx>{`
        .buttonContainer {
          display:flex;
          justify-content:space-around;
          width: 400px;
          margin:auto;
        }
          `}</style>
  </div>
);

export default ButtonActions;
