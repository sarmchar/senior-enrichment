import React, { Component } from 'react';
import Store from '../reducers';

export default class Header extends Component {

  render() {
    return (
      <div id='header1'>
      <div id='header'>
    <h1> Margaret Hamilton Interplanetary Academy of Javascript </h1>
    <div className="font1 flex-grid">
      <button>Home</button>
      <button>Campuses</button>
      <button>Students</button>
    </div>
  </div> </div>
    );

  }
}



