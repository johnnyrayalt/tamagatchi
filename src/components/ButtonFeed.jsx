import React from 'react';

const ButtonFeed = () => (
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
    <button className="btn">Feed</button>
  </div>
);

export default ButtonFeed;
