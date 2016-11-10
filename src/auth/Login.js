import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  AsyncStorage,
  Image,
  TouchableHighlight,
} from 'react-native'
import { Actions } from 'react-native-router-flux'

import { STORAGE_SESSION_KEY } from '../constants/StorageKeys'
import { alert } from '../utils/helpers'

export default class Login extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
  }

  componentWillMount() {
    AsyncStorage.getItem(STORAGE_SESSION_KEY).then((result) => {
      if (result) {
        Actions.events()
      }
    })
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.errorMessage && nextProps.errorMessage) {
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
      <Image
        source={require('../image/background.png')}
        resizeMode={Image.resizeMode.center} 
        style={styles.image}  
      >
      <Text style={styles.logo}>Lucky Money</Text>
      <View style={styles.textContainer}>
        <TextInput 
          ref='inputUserName'
          autoCapitalize='none'    
          placeholder='User name' 
          placeholderTextColor='gray' 
          style={styles.input}
        />
        <TextInput 
          ref='inputPassword'
          autoCapitalize='none'    
          placeholder='Password' 
          placeholderTextColor='gray' 
          secureTextEntry={true} 
          style={styles.input} 
        />
      </View>
      <TouchableHighlight onPress={this.login} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableHighlight>
      </Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    flexDirection: 'column',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'rgb(212,55,43)',
    marginBottom: 80,
  },
  textContainer: {
    width: 350,
    height: 120,
    marginLeft: 16,
    marginRight: 16,
    padding: 16,
    backgroundColor: 'rgba(3,3,3,0.3)',
  },
  input: {
    flex: 1,
    height: 40,
    marginBottom: 5,
    color: 'white',
  },
  buttonContainer: {
    height: 40,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,  
    borderRadius: 20,
    backgroundColor: 'rgb(200, 50, 50)',
    padding: 10,      
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
  },
})