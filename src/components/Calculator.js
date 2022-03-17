/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleCalculate = this.handleCalculate.bind(this);
  }

  handleCalculate(e) {
    this.setState((state) => calculate(state, e.target.innerText));
  }

  render() {
    const { next, total, operation } = this.state;
    return (
      <div className="Calculator">
        <div className="result">
          {total || ''}
          {operation || ''}
          {next || ''}
        </div>

        <button type="button" onClick={this.handleCalculate}>AC</button>
        <button type="button" onClick={this.handleCalculate}>+/-</button>
        <button type="button" onClick={this.handleCalculate}>%</button>
        <button type="button" onClick={this.handleCalculate} className="orange">÷</button>

        <button type="button" onClick={this.handleCalculate}>7</button>
        <button type="button" onClick={this.handleCalculate}>8</button>
        <button type="button" onClick={this.handleCalculate}>9</button>
        <button type="button" onClick={this.handleCalculate} className="orange">x</button>

        <button type="button" onClick={this.handleCalculate}>4</button>
        <button type="button" onClick={this.handleCalculate}>5</button>
        <button type="button" onClick={this.handleCalculate}>6</button>
        <button type="button" className="orange" onClick={this.handleCalculate}>-</button>

        <button type="button" onClick={this.handleCalculate}>1</button>
        <button type="button" onClick={this.handleCalculate}>2</button>
        <button type="button" onClick={this.handleCalculate}>3</button>
        <button type="button" className="orange" onClick={this.handleCalculate}>+</button>

        <button type="button" className="w-2" onClick={this.handleCalculate}>0</button>
        <button type="button" onClick={this.handleCalculate}>.</button>
        <button type="button" className="orange" onClick={this.handleCalculate}>=</button>
      </div>
    );
  }
}

export default Calculator;
