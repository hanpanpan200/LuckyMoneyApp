import axios from 'axios'
import { AsyncStorage } from 'react-native'
import { STORAGE_SESSION_KEY } from '../constants/StorageKeys'
import { APIHOST, APP_ID, APP_KEY }from '../constants/ApiConfig'
import { Actions } from 'react-native-router-flux'

const api = axios.create({
  baseURL: `${APIHOST}`,
  headers: {
    'X-LC-Id': APP_ID,
    'X-LC-Key': APP_KEY,
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  responseType: 'json',
})

async function setConfig(config) {
  try {
    var value = await AsyncStorage.getItem(STORAGE_SESSION_KEY)
    if (value !== null) {
      config.headers['X-LC-Session'] = JSON.parse(value)
    }
    return config
  } catch (error) {
    return Promise.reject(error)
  }
}

api.interceptors.request.use(config => setConfig(config), error => {
  return Promise.reject(error)
})

api.interceptors.response.use(response => response, err => {
  if (err.response) {
    //Handle server error
    err.errorData = { message: err.response.data.error }
    if (err.response.status === 401) {
      Actions.login()
    }
  } else {
    //Handle network error
    err.errorData = { message: err.message }
  }
  return Promise.reject(err)
})

export default api
