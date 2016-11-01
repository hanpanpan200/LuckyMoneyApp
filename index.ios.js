import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Router } from 'react-native-router-flux'
import scenes from './src/Routes'

export default class LuckyMoney extends Component {
  render() {
    return <Router scenes={scenes} />
  }
}

AppRegistry.registerComponent('LuckyMoney', () => LuckyMoney)
