import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { batchStoreEnhancer, batchMiddleware } from 'redux-batch-enhancer';
import App from './App';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

registerServiceWorker();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(batchMiddleware, thunk)),
  batchStoreEnhancer
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
