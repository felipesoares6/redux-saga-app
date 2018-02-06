import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'

import { countReducer } from './ducks/count'
import rootSaga from './sagas/root'

import App from './containers/App'

const logger = createLogger()
const sagaMiddleware = createSagaMiddleware()

const enhancer = compose(
  applyMiddleware(
    logger,
    sagaMiddleware
  )
)

const reducers = combineReducers({ countReducer })

const store = createStore(reducers, {}, enhancer)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)
