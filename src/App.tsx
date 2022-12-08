import React, {useState} from 'react';
import './App.css';
import {SeterCounter} from './components/seter counter/SeterCounter';
import {Counter} from './components/counter/Counter';

function App() {
  const [counter, setCounter] = useState<number>(0)
  let startValue = 0
  let maxValue = 5


  const incFunkHandler = () => maxValue ? setCounter(counter + 1) : ''
  const resetFuncHandler = () => setCounter(0)


  return (
    <div className="App">
      <SeterCounter
        setCallback={() => {
          alert('set')
        }}
      />
      <Counter
        number={counter}
        startValue={0}
        maxValue={5}
        disabled={false}
        incHandler={incFunkHandler}
        resetHandler={resetFuncHandler}
      />
    </div>
  );
}

export default App;
