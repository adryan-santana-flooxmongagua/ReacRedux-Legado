import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import conutRed from './conutRed'
import Counter from './counter'

const reducers = combineReducers({
  counter: conutRed
})

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Counter></Counter>
  </Provider>,
  document.getElementById('app')
)
