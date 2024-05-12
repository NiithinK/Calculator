import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('');

  const addToDisplay = (value) => {
    setDisplay(display + value);
  };

  const addOperator = (operator) => {
    if (display !== '' && !isNaN(display.slice(-1))) {
      setDisplay(display + operator);
    }
  };

  const calculate = () => {
    try {
      let result = eval(display);
      if (result === Infinity) {
        setDisplay('Infinity');
      } else if (isNaN(result)) {
        setDisplay('Error');
      } else {
        setDisplay(result.toString());
      }
    } catch (error) {
      setDisplay('Error');
    }
  };

  const clearDisplay = () => {
    setDisplay('');
  };

  return (
    <>
    <h1 style={{textAlign:'center'}}>React Calculator</h1>
    <div className="calculator">
      
      <input type="text" id="display" value={display} readOnly />
      <div className="buttons">
        <button onClick={() => addToDisplay('7')}>7</button>
        <button onClick={() => addToDisplay('8')}>8</button>
        <button onClick={() => addToDisplay('9')}>9</button>
        <button onClick={() => addOperator('+')}>+</button>
        <button onClick={() => addToDisplay('4')}>4</button>
        <button onClick={() => addToDisplay('5')}>5</button>
        <button onClick={() => addToDisplay('6')}>6</button>
        <button onClick={() => addOperator('-')}>-</button>
        <button onClick={() => addToDisplay('1')}>1</button>
        <button onClick={() => addToDisplay('2')}>2</button>
        <button onClick={() => addToDisplay('3')}>3</button>
        <button onClick={() => addOperator('*')}>*</button>
        <button onClick={clearDisplay}>C</button>
        <button onClick={() => addToDisplay('0')}>0</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => addOperator('/')}>/</button>
        
      </div>
    </div>
    </>
  );
}

export default App;
