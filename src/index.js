import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css'

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/reducers'
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'


const store = createStore(reducer, applyMiddleware(thunk))

// console.log(store.getState());

ReactDOM.render(<Router><Provider store={store}><App /></Provider></Router>, document.getElementById('root'));
registerServiceWorker();
