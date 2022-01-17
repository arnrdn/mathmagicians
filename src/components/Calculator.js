import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: null, operation: null });

  const handleClick = (e) => {
    setState((state) => calculate(state, e.target.textContent));
  };

  return (
    <main>
      <div className="interface">
        <div className="result">
          {state.total}
          {state.operation}
          {state.next}
        </div>
        <button type="button" onClick={handleClick}>AC</button>
        <button type="button" onClick={handleClick}>+/-</button>
        <button type="button" onClick={handleClick}>%</button>
        <button type="button" className="orange-btn" onClick={handleClick}>÷</button>
        <button type="button" onClick={handleClick}>7</button>
        <button type="button" onClick={handleClick}>8</button>
        <button type="button" onClick={handleClick}>9</button>
        <button type="button" className="orange-btn" onClick={handleClick}>x</button>
        <button type="button" onClick={handleClick}>4</button>
        <button type="button" onClick={handleClick}>5</button>
        <button type="button" onClick={handleClick}>6</button>
        <button type="button" className="orange-btn" onClick={handleClick}>-</button>
        <button type="button" onClick={handleClick}>1</button>
        <button type="button" onClick={handleClick}>2</button>
        <button type="button" onClick={handleClick}>3</button>
        <button type="button" className="orange-btn" onClick={handleClick}>+</button>
        <button type="button" className="zero" onClick={handleClick}>0</button>
        <button type="button" onClick={handleClick}>.</button>
        <button type="button" className="orange-btn" onClick={handleClick}>=</button>
      </div>
    </main>
  );
};

export default Calculator;
