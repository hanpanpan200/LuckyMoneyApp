import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import { 
  TouchableOpacity,
  StyleSheet 
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import LoginContainer from './auth/LoginContainer'
import EventListContainer from './events/EventListContainer'
import EventNew from './events/EventNew'

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
          <Scene 
            key='login' 
            title='Login'             
            component={LoginContainer} 
            hideNavBar={true}
          />
          <Scene 
            key='events' 
            component={EventListContainer} 
            title='Events'
            navigationBarStyle={styles.navBar} 
            titleStyle={styles.navTitle}
            hideBackImage={true}
            renderRightButton={this.renderSettings}
            hideNavBar={false} 
          />
          <Scene 
            key='eventNew' 
            component={EventNew}
            hideNavBar={true} 
            initial={true}
          />
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