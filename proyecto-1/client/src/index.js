import 'assets/styles/styles.scss';
import React from 'react';
import { render, hydrate } from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTimes,
  faBars,
  faPaperPlane,
  faSyncAlt,
  faArrowLeft,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import App from './App';

library.add(
  faTimes,
  faBars,
  faPaperPlane,
  faSyncAlt,
  faArrowLeft,
  faSignOutAlt
);
const renderMethod = module.hot ? render : hydrate;

renderMethod(<App />, document.getElementById('root'));
