import React, { Component } from 'react'
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native'
import Button from 'react-native-button'

export default class Login extends Component {
  login = () => {
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <TextInput placeholder='User name' placeholderTextColor='#928d84' style={styles.input} />
          <TextInput placeholder='Password' placeholderTextColor='#928d84' style={styles.input} />
          <Button style={styles.button} onPress={this.login}>Login</Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#82d4aa',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    height: 120,
    padding: 16,
  },
  input: {
    flex: 1,
    height: 20,
    marginBottom: 5,
    color: 'white',
  },
  button: {
    height: 30,
    fontSize: 20,
    color: 'white',
    backgroundColor: '#928d84',
  },
})