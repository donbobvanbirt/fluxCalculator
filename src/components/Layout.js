import React, { Component } from 'react';
import Keys from './Keys';
import Display from './Display';

export default class Layout extends Component {
  render() {
    return (
      <div className="container">
        <h1>Flux Calculator</h1>
        <Display />
        <Keys />
      </div>
    )
  }
}
