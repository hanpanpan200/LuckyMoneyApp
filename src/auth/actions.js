import { Actions } from 'react-native-router-flux'

import api from '../api/api'
import { AsyncStorage } from 'react-native'
import { STORAGE_SESSION_KEY } from '../constants/StorageKeys'

export const AUTH = {
  REQUESTING: 'AUTH/REQUESTING',
  LOGIN_SUCCESS: 'AUTH/LOGIN_SUCCESS',
  LOGIN_FAILED: 'AUTH/LOGIN_FAILED',
}

export function login(data) {
  return dispatch => {
    if (!data || !data.username || !data.password) {
      return dispatch(loginFailed({message: 'User name and password can not be blank.'}))
    }
    dispatch(requesting())
    return api.post('login', {
      username: data.username,
      password: data.password,
    }).then(json => {
      return saveUserInfo(json.data, dispatch)
    }).catch(err => {
      return dispatch(loginFailed(err.errorData))
    })
  }
}

function requesting() {
  return {
    type: AUTH.REQUESTING,  
  }
}

async function saveUserInfo(userInfo, dispatch) {
  await AsyncStorage.setItem(STORAGE_SESSION_KEY, JSON.stringify(userInfo.sessionToken))
  delete userInfo.sessionToken
  dispatch(loginSuccess(userInfo))
  Actions.events()
}

function loginSuccess(userInfo) {
  return {
    type: AUTH.LOGIN_SUCCESS,
    payload: userInfo,
  }
}

function loginFailed(error) {
  return {
    type: AUTH.LOGIN_FAILED,
    payload: error,
  }
}