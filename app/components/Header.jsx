import React, { Component } from 'react';
import Store from '../reducers';

export default class Header extends Component {

  render() {
    return (
      <div id='header1'>
      <div id='header'>
        <font className="font2">
         Margaret Hamilton Interplanetary Academy of Javascript
        </font>
        <div id="mainflex">
          <button>Home</button>
          <button>Campuses</button>
          <button>Students</button>
        </div>
       </div></div>
    );
  }
}
