const styles = require('./App.scss');

import React, { Component } from 'react';

import Logo from './0-Logo/Logo';

export default class App extends Component {

  render() {
    return (
      <div className={styles.app}>
        <Logo />
        <h1>CSS Modules Webpack Demo</h1>

        <hr className={styles.hr} />

      </div>
    );
  }

};
