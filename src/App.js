import React, { useState } from 'react';
import './App.css'
function Calculator() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState(null);

  const appendNumber = (number) => {
    setExpression(expression + number);
  };

  const appendOperator = (operator) => {
    if (expression === '') return;
    setExpression(expression + operator);
  };

  const clearDisplay = () => {
    setExpression('');
    setResult(null);
  };

  const calculate = () => {
    if (expression === '') {
      setResult('Error');
      return;
    }
    try {
      const calculatedResult = eval(expression);
      setResult(calculatedResult === Infinity ? 'Infinity' : (isNaN(calculatedResult) ? 'NaN' : calculatedResult));
    } catch (error) {
      setResult('Error');
    } finally {
      setExpression('');
    }
  };

  return (
    <div className="calculator-container">
      <input type="text" id="display" value={expression} disabled />
      <div id="result">{result}</div>
      <div className='buttons'>
      <button onClick={() => appendNumber('7')}>7</button>
      <button onClick={() => appendNumber('8')}>8</button>
      <button onClick={() => appendNumber('9')}>9</button>
      <button onClick={() => appendOperator('/')}>/</button>
      <button onClick={() => appendNumber('4')}>4</button>
      <button onClick={() => appendNumber('5')}>5</button>
      <button onClick={() => appendNumber('6')}>6</button>
      <button onClick={() => appendOperator('*')}>*</button>
      <button onClick={() => appendNumber('1')}>1</button>
      <button onClick={() => appendNumber('2')}>2</button>
      <button onClick={() => appendNumber('3')}>3</button>
      <button onClick={() => appendOperator('-')}>-</button>
      <button onClick={() => appendNumber('0')}>0</button>
      <button onClick={clearDisplay}>C</button>
      <button onClick={() => appendOperator('+')}>+</button>
      <button onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
