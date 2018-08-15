import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import registerServiceWorker from './registerServiceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; 
import logger from 'redux-logger';
import rootReducer from './reducers/reminders';

//first is reducer 
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger))
);

ReactDOM.render(
    <Provider store={ store }>
        <App/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
