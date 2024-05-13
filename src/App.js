import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('');
  const [error, setError] = useState('');
  const [statusError, setStatus] = useState(false);

  const addToDisplay = (value) => {
    if(value === 'NaN'){
      setError('NaN');
      setStatus(true);
    }else{
      
      setDisplay(display + value);
    }
   
  };

  const addOperator = (operator) => {
    if (isNaN(display.slice(-1))) {
      setError('NaN');
      setStatus(true);
    } else if (display !== '') {
      setDisplay(display + operator);
    }
  };

  const calculate = () => {
    try {
      let result = eval(display);
      if (result === Infinity) {
        setError('Infinity');
        setStatus(true);
      } 
      else if (isNaN(result)) {
        setError('NaN');
        setStatus(true);
      } 
      else {
        if(result === 'NaN'){
          setError('NaN');
          setStatus(true);
        }else{
          
        setDisplay(result.toString());
        }
      }
    } catch (error) {
      setError('Error');
      setStatus(true);
    }
  };

  const clearDisplay = () => {
    setDisplay('');
    setError('');
    setStatus(false);
  };

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>React Calculator</h1>
      <div className="calculator">
        <input type="text" id="display" value={display} readOnly />
        {statusError && (
          <div>
            <h3 style={{ textAlign: 'center', fontFamily: 'inherit' }}>{error}</h3>
          </div>
        )}
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
