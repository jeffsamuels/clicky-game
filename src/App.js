import React from 'react';
import sunCard from './src/components/sun';
import devilCard from './src/components/devil';
import magicianCard from './src/components/magician';
import moonCard from './src/components/moonCard';
import starCard from './src/components/star';
import empressCard from './src/components/empress';
import emperorCard from './src/components/emperor';
import foolCard from './src/components/fool';
import towerCard from './src/components/tower';
import priestessCard from './src/components/priestess';
import hierophantCard from './src/components/hierophant';
import judgementCard from './src/components/judgement';
import './App.css';

// Here I need some type of mechanism by which to randomly render components 
// into card holder divs. 

// Maybe an array of chosen cards that somehow checks to make sure there aren't duplicates.

// I'll need click handlers for each card, that trigger a shuffle and rerendering of the DOM.

//Finally I'll need to create code that keeps track of a player's score and renders it.




function App() {
  return (

    <div className="App">

      <div class="container">

        <div class="navBar"></div>

        <div class="jumbotron">

          <div>
            <h1><strong>TAROT</strong></h1>
            <h1><strong>FATE</strong></h1>
          </div>

        </div>

        <div class="row">

          <div class="col-md-8"><h2><strong>Choose your fate, but never the same card twice.</strong></h2></div>

          <div class="col-md-4" id="score"><h2><strong>Score: 0</strong></h2></div>

        </div>


        <div class="row">

          <div class="col-sm-2">

            <div class="cardHolder">
              <img src={sunCard} alt="sun" height="300px"></img>
            </div>

          </div>

          <div class="col-sm-2">

            <div class="cardHolder">
              <img src={devilCard} alt="devil" height="300px"></img>
            </div>

          </div>

          <div class="col-sm-2">

            <div class="cardHolder">
              <img src={priestessCard} alt="priestess" height="300px"></img>
            </div>

          </div>

          <div class="col-sm-2">

            <div class="cardHolder">
              <img src={towerCard} alt="tower" height="300px"></img>
            </div>

          </div>

          <div class="col-sm-2">

            <div class="cardHolder">
              <img src={emperorCard} alt="emperor" height="300px"></img>
            </div>

          </div>

          <div class="col-sm-2">

            <div class="cardHolder">
              <img src={foolCard} alt="fool" height="300px"></img>
            </div>

          </div>

        </div>

        <div class="row">

          <div class="col-sm-2">

            <div class="cardHolder">
              <img src={empressCard} alt="empress" height="300px"></img>
            </div>

          </div>

          <div class="col-sm-2">

            <div class="cardHolder">
              <img src={starCard} alt="star" height="300px"></img>
            </div>

          </div>

          <div class="col-sm-2">

            <div class="cardHolder">
              <img src={moonCard} alt="moon" height="300px"></img>
            </div>

          </div>

          <div class="col-sm-2">

            <div class="cardHolder">
              <img src={hierophantCard} alt="hierophant" height="300px"></img>
            </div>

          </div>

          <div class="col-sm-2">

            <div class="cardHolder">
              <img src={judgementCard} alt="judgement" height="300px"></img>
            </div>

          </div>

          <div class="col-sm-2">

            <div class="cardHolder">
              <img src={magicianCard} alt="magician" height="300px"></img>
            </div>

          </div>

        </div>


      </div>


    </div>
  );
}

export default App;
