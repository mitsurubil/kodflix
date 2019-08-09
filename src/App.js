import React from 'react';
import ShowsAndMovies from './ShowsAndMovies';
import Frozen from './images/frozen-pic.jpg';
import TheWizardofOz from './images/wizard-of-oz-pic.jpg';
import PsILoveYou from './images/ps-i-love-you-pic.jpg';
import MortalKombat from './images/mortal-kombat-pic.jpg';
import GameofThrones from './images/game-of-thrones-pic.jpg';
import TheBoys from './images/the-boys-pic.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <ShowsAndMovies name='Frozen' img={Frozen} />
        <ShowsAndMovies name='The Wizard of Oz' img={TheWizardofOz} />
        <ShowsAndMovies name='P.s. I Love You' img={PsILoveYou} />
      </div>
      <div className="container">
        <ShowsAndMovies name='Mortal Kombat' img={MortalKombat} />
        <ShowsAndMovies name='Game of Thrones' img={GameofThrones} />
        <ShowsAndMovies name='The Boys' img={TheBoys} />
      </div>
    </div>
  );
}

export default App;