import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import './Containers/App.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import {robots} from './Robots'
ReactDOM.render(<App/>
	, document.getElementById('root'));
registerServiceWorker();
