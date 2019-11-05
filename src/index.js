import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// new import
import {createStore} from 'redux';
import reducer from './store/reducer';
import { Provider } from 'react-redux';

// initialize redux store using the reducer (changes state)
const store = createStore(reducer);

// App wrapped in Provider from react-redux with the store specified
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
