import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'

import LoginContainer from './auth/LoginContainer'
import EventListContainer from './events/EventListContainer'

export default class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene key='login' component={LoginContainer} title='Login' hideNavBar/>
          <Scene key='events' component={EventListContainer} title='Events' hideNavBar={false} initial={true}/>
        </Scene>
      </Router>
    )
  }
}
