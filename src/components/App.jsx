import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Game from './Game';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart)


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
    <Switch>
      <Route exact path='/' component={ Game } />
    </Switch>
  </div>

);


export default App;
