import React from 'react';
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
        <div className="item">
          <img src={Frozen} alt="Frozen" />
          <div className="overlay">
            <h1>Frozen</h1>
          </div>
        </div>
        <div className="item">
          <img src={TheWizardofOz} alt="The Wizard of Oz" />
          <div className="overlay">
            <h1>The Wizard of Oz</h1>
          </div>
        </div>
        <div className="item">
          <img src={PsILoveYou} alt="P.s. I love You" />
          <div className="overlay">
            <h1>P.s. I love You</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="item">
          <img src={MortalKombat} alt="Mortal Kombat" />
          <div className="overlay">
            <h1>Mortal Kombat</h1>
          </div>
        </div>
        <div className="item">
          <img src={GameofThrones} alt="Game of Thrones" />
          <div className="overlay">
            <h1>Game of Thrones</h1>
          </div>
        </div>
        <div className="item">
          <img src={TheBoys} alt="The Boys" />
          <div className="overlay">
            <h1>The Boys</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;