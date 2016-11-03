import api from '../api/api'

export const EVENT = {
  REQUESTING: 'EVENT/REQUESTING',
  REQUEST_SUCCESS: 'REQUEST_SUCCESS',
  REQUEST_FAILED: 'REQUEST_FAILED',
}

export function getEventList() {
  return dispatch => {
    dispatch(requesting())
    api.get('classes/Event').then(json => {
      return dispatch(requestSuccess(json.data.results))
    }).catch(error => {
      return dispatch(requestFailed(error.errorData))
    })
  }
}

function requesting() {
  return {
    type: EVENT.REQUESTING,
  }
}

function requestSuccess(eventList) {
  return {
    type: EVENT.REQUEST_SUCCESS,
    payload: eventList,
  }
}

function requestFailed(error) {
  return {
    type: EVENT.REQUEST_FAILED,
    payload: error,
  }
}