import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { movePlayerDown, startGame } from './actions';
import './index.css';

registerServiceWorker();

let startTime = 0;
let dropCounter = 0;
let dropInterval = 1000;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(startGame());

const loop = endTime => {
  let deltaTime = endTime - startTime;
  dropCounter += deltaTime;
  if (dropCounter > dropInterval) {
    store.dispatch(movePlayerDown());
    dropCounter = 0;
  }

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );

  startTime = endTime;

  requestAnimationFrame(loop);
};

loop(0);
