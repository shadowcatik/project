import App from './app';
import 'gh-pages';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';

common.app = new App(common);
common.app.start();
let ghpages = require('gh-pages');
let path = require('path');

//  ghpages.publish(path.join(__dirname, 'dist'), function(err) {  });