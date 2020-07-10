import React from 'react';
import './App.css';
import Pokemon from './Pokemon';
import data from './data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Kyle's Pokedex!
        </p>
        {data.map(pokemon => <Pokemon {...pokemon}/>)}
      </header>
    </div>
  );
}

export default App;
