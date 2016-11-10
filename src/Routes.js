import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import { 
  TouchableOpacity,
  StyleSheet 
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import LoginContainer from './auth/LoginContainer'
import EventListContainer from './events/EventListContainer'

export default class AppRouter extends Component {
  renderBack() {
    return (
      <Icon name='angle-down' size={30} color='white' />
    )
  } 

  renderSettings() {
    return (
      <TouchableOpacity onPress={this.goSettings}>
        <Icon name='bars' size={18} color='white' />
      </TouchableOpacity>
    )
  }

  goSettings = () => {
    
  }

  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene key='login' component={LoginContainer} title='Login' hideNavBar />
          <Scene key='events' 
            component={EventListContainer} 
            title='Events'
            navigationBarStyle={styles.navBar} 
            titleStyle={styles.navTitle}
            hideBackImage={true}
            renderRightButton={this.renderSettings}
            hideNavBar={false} />
        </Scene>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#ec4d50',
  },
  navTitle: {
    color: 'white',
  },
})