import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const middlewares = [
  thunk,
]

if (__DEV__) {
  const createLogger = require('redux-logger')
  middlewares.push(createLogger({ collapsed: true }))
}

export default createStore(
  rootReducer,
  applyMiddleware(...middlewares)
)
