import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import LoginContainer from './auth/LoginContainer'

export default class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene key='login' component={LoginContainer} title='Login' hideNavBar/>
        </Scene>
      </Router>
    )
  }
}
