import React, { Component } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { next, total, operation } = this.state;
    return (
      <main>
        <div className="interface">
          <div className="result">
            {total}
            {operation}
            {next}
          </div>
          <button type="button" onClick={this.handleClick}>AC</button>
          <button type="button" onClick={this.handleClick}>+/-</button>
          <button type="button" onClick={this.handleClick}>%</button>
          <button type="button" className="orange-btn" onClick={this.handleClick}>÷</button>
          <button type="button" onClick={this.handleClick}>7</button>
          <button type="button" onClick={this.handleClick}>8</button>
          <button type="button" onClick={this.handleClick}>9</button>
          <button type="button" className="orange-btn" onClick={this.handleClick}>x</button>
          <button type="button" onClick={this.handleClick}>4</button>
          <button type="button" onClick={this.handleClick}>5</button>
          <button type="button" onClick={this.handleClick}>6</button>
          <button type="button" className="orange-btn" onClick={this.handleClick}>-</button>
          <button type="button" onClick={this.handleClick}>1</button>
          <button type="button" onClick={this.handleClick}>2</button>
          <button type="button" onClick={this.handleClick}>3</button>
          <button type="button" className="orange-btn" onClick={this.handleClick}>+</button>
          <button type="button" className="zero" onClick={this.handleClick}>0</button>
          <button type="button" onClick={this.handleClick}>.</button>
          <button type="button" className="orange-btn" onClick={this.handleClick}>=</button>
        </div>
      </main>
    );
  }
}

export default Calculator;
