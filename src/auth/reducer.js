import { AUTH } from './actions'

const initialState = {
  isLoading: false,
  user: null,
  errorMessage: null,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case AUTH.REQUESTING: 
    return {
      ...state,
      isLoading: true,
    } 
  case AUTH.LOGIN_SUCCESS: 
    return {
      ...state,
      isLoading: false,
      user: action.payload,
    }
  case AUTH.LOGIN_FAILED: 
    return {
      ...state,
      isLoading: false,
      errorMessage: action.payload.message,
    }
  default: 
    return state
  }
}