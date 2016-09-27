import React, { Component } from 'react';

import CalcStore from '../stores/CalcStore';

export default class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentInput: CalcStore.getInput()
    }
    this._onChange = this._onChange.bind(this);
    // console.log(this.state);
  }

  // start listening
  componentWillMount() {
    CalcStore.startListening(this._onChange)
  }

  // stop listening
  componentWillUnmount() {
    CalcStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState({
      currentInput: CalcStore.getInput()
    })
    // console.log(this.state);
  }

  render() {
    return (
      <div className="input">
        <h3>{this.state.currentInput}</h3>
      </div>
    )
  }
}
