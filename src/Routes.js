import React from 'react'
import { Actions, Scene } from 'react-native-router-flux'
import Login from './auth/Login'

export default Actions.create(
  <Scene key='root'>
    <Scene key='login' component={Login} title='Login' />
  </Scene>
)
