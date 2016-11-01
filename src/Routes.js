import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Login from './auth/Login'

export default class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene key='login' component={Login} title='Login' />
        </Scene>
      </Router>
    )
  }
}
