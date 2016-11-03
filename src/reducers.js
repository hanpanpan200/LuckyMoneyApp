import { combineReducers } from 'redux'

import auth from './auth/reducer'
import events from './events/reducer'

const reducers = combineReducers({
  auth,
  events,
})

export default reducers