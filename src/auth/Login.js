import React, { Component, PropTypes } from 'react'
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native'
import Button from 'react-native-button'
import { alert } from '../utils/helpers'

export default class Login extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errorMessage) {
      alert(nextProps.errorMessage)
    }
  }

  login = () => {
    const username = this.refs.inputUserName._lastNativeText
    const password = this.refs.inputPassword._lastNativeText
    this.props.login({
      username: username,
      password: password,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <TextInput 
            ref='inputUserName'
            autoCapitalize='none'    
            placeholder='User name' 
            placeholderTextColor='#928d84' 
            style={styles.input}
          />
          <TextInput 
            ref='inputPassword'
            autoCapitalize='none'    
            placeholder='Password' 
            placeholderTextColor='#928d84' 
            secureTextEntry={true} 
            style={styles.input} 
          />
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
    fontWeight: '300',
    color: 'white',
    backgroundColor: '#928d84',
  },
})