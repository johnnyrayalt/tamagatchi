import React from 'react';
import { Switch, Route } from 'react-router-dom';

const App = () => (
  <div>
    <style jsx global>
      {`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
      `}
    </style>
    <h1>Hello!</h1>
    <Switch>
      <Route exact path='/' component={ Game }>
    </Switch>
  </div>

);


export default App;
