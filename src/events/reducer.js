import { EVENT } from './actions'

const initialState = {
  isLoading: false,
  eventList: [],
  errorMessage: null,
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
  case EVENT.REQUESTING: 
    return {
      ...state,
      isLoading: true,
    }
  case EVENT.REQUEST_SUCCESS: 
    return {
      ...state,
      isLoading: false,
      eventList: action.payload,
    }
  case EVENT.REQUEST_FAILED: 
    return {
      ...state,
      isLoading: false,
      errorMessage: action.payload.errorMessage,
    }
  default: 
    return state
  }
}