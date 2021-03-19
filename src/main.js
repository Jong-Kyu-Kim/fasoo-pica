import React from 'react';
import { render } from 'react-dom';

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import './index.scss';

import App from './components/App';

//import loadable from '@loadable/component';

Array.prototype.forEach.call(document.getElementsByTagName('button'), (button) => {
  button.onclick = (e) => {
    document.getElementById('start').style.display = 'none';
    e.preventDefault();
    render(<App />, document.getElementById('app'));
  };
});
