import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css'

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import contractReducer from './reducers/contracts'
import { Provider } from 'react-redux'

const store = createStore(contractReducer, applyMiddleware(thunk))

// console.log(store.getState());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
