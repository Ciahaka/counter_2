import React from 'react';

import './App.css';
import {SeterCounter} from './components/seter counter/SeterCounter';
import {Counter} from './components/counter/Counter';

function App() {
  return (
    <div className="App">
      <SeterCounter/>
      <Counter/>
    </div>
  );
}

export default App;
