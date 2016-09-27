import React, { Component } from 'react';

import CalcActions from '../actions/CalcActions';

export default class Keys extends Component {
  constructor(props) {
    super(props);

  }

  numberClick(num) {
    CalcActions.numClick(num);
  }

  clear() {
    CalcActions.clear();
  }

  // subtract() {
  //
  // }
  //
  // add() {
  //
  // }
  //
  // devide() {
  //
  // }
  //
  // multiply() {
  //
  // }
  //
  equals() {
    CalcActions.equals();
  }

  render() {

    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td><button className="btn btn-default" onClick={() => this.numberClick('7')}>7</button></td>
              <td><button className="btn btn-default" onClick={() => this.numberClick('8')}>8</button></td>
              <td><button className="btn btn-default" onClick={() => this.numberClick('9')}>9</button></td>
              <td><button className="btn btn-default" onClick={this.clear}>C</button></td>
            </tr>
            <tr>
              <td><button className="btn btn-default" onClick={() => this.numberClick('4')}>4</button></td>
              <td><button className="btn btn-default" onClick={() => this.numberClick('5')}>5</button></td>
              <td><button className="btn btn-default" onClick={() => this.numberClick('6')}>6</button></td>
              <td><button className="btn btn-default" onClick={() => this.numberClick('-')}>-</button></td>
            </tr>
            <tr>
              <td><button className="btn btn-default" onClick={() => this.numberClick('1')}>1</button></td>
              <td><button className="btn btn-default" onClick={() => this.numberClick('2')}>2</button></td>
              <td><button className="btn btn-default" onClick={() => this.numberClick('3')}>3</button></td>
              <td><button className="btn btn-default" onClick={() => this.numberClick('+')}>+</button></td>
            </tr>
            <tr>
              <td><button className="btn btn-default" onClick={() => this.numberClick('0')}>0</button></td>
              <td><button className="btn btn-default" onClick={() => this.numberClick('/')}>/</button></td>
              <td><button className="btn btn-default" onClick={() => this.numberClick('*')}>*</button></td>
              <td><button className="btn btn-default" onClick={this.equals}>=</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
