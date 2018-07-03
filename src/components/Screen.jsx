import React from 'react';
import dance from './assets/img/dance.gif';

const Screen = () => (
  <div className='screenContainer'>
    <div className='screenSize'><img src={dance} /></div>
    <style jsx>{`
        .screenContainer {
          width:100%;
        }
        .screenSize {
          width:400px;
          height:200px;
          margin: auto;
          background-color:blue;
        }
          `}</style>
  </div>
);

export default Screen;
