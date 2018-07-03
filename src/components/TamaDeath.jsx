import React from 'react';
import death from '../assets/img/death.gif';

const TamaDeath = () => (
  <div className="screenContainer">
    <style jsx>{`
        .screenContainer {
          width:100%;
        }
        .screenSize {
          width:400px;
          height:200px;
          margin: auto;
        }

        .deathPic {
          height: 100%;
          width: 400px;
          margin: auto;
        }
          `}</style>
    <div className="screenSize">
      <img className="deathPic" src={death} />
    </div>
  </div>
);
export default TamaDeath;
