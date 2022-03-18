import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const { next, total, operation } = state;
  const handleCalculate = (e) => setState(calculate(state, e.target.innerText));
  return (
    <div className="Calculator">
      <div className="result">
        {total || ''}
        {operation || ''}
        {next || ''}
      </div>

      <button type="button" onClick={handleCalculate}>AC</button>
      <button type="button" onClick={handleCalculate}>+/-</button>
      <button type="button" onClick={handleCalculate}>%</button>
      <button type="button" onClick={handleCalculate} className="orange">÷</button>

      <button type="button" onClick={handleCalculate}>7</button>
      <button type="button" onClick={handleCalculate}>8</button>
      <button type="button" onClick={handleCalculate}>9</button>
      <button type="button" onClick={handleCalculate} className="orange">x</button>

      <button type="button" onClick={handleCalculate}>4</button>
      <button type="button" onClick={handleCalculate}>5</button>
      <button type="button" onClick={handleCalculate}>6</button>
      <button type="button" className="orange" onClick={handleCalculate}>-</button>

      <button type="button" onClick={handleCalculate}>1</button>
      <button type="button" onClick={handleCalculate}>2</button>
      <button type="button" onClick={handleCalculate}>3</button>
      <button type="button" className="orange" onClick={handleCalculate}>+</button>

      <button type="button" className="w-2" onClick={handleCalculate}>0</button>
      <button type="button" onClick={handleCalculate}>.</button>
      <button type="button" className="orange" onClick={handleCalculate}>=</button>
    </div>
  );
}

export default Calculator;
