import App from './app';
import ghpages from 'gh-pages';
import path from 'gh-pages';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';
const callback = () => {
	ghpages.publish(path.join(__dirname, 'dist'), function(err) { });
};
ghpages.publish(path.join(__dirname, 'build'), callback());

common.app = new App(common);
common.app.start();
