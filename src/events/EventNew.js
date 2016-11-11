import React, { Component, PropTypes } from 'react'
import { 
  View,
  Image,
  TextInput,
  StyleSheet, 
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class EventNew extends Component {
  // static propTypes = {
  //   createEvent: PropTypes.func.isRequired,
  // }

  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={require('../image/heroImage.png')}
          style={styles.image}
          resizeMode={Image.resizeMode.cover}
        >
          <Icon name='angle-down' size={35} color='white' style={styles.backButton}/>        
        </Image>
        <View style={styles.content}>
          <View style={styles.inputContainer}>
            <TextInput 
              ref='name'
              autoCapitalize='none'    
              placeholder='Name' 
              placeholderTextColor='gray' 
              style={styles.input}
            />
            <TextInput 
              ref='amount'
              autoCapitalize='none'    
              placeholder='Amount' 
              placeholderTextColor='gray' 
              style={styles.input} 
            />
            <TextInput 
              ref='dateTime'
              autoCapitalize='none'    
              placeholder='DateTime' 
              placeholderTextColor='gray' 
              style={styles.input} 
            />
            <TextInput 
              ref='phoneNumber'
              autoCapitalize='none'    
              placeholder='Phone number' 
              placeholderTextColor='gray' 
              style={styles.input} 
            />
          </View>
          <View style={styles.menuBar}>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    height: 300,
  },
  backButton: {
    backgroundColor: 'transparent',
    marginLeft: 10,
    marginTop: 25,
  },
  content: {
    flex: 1,
    backgroundColor: '#f6f6f6',    
  },
  inputContainer: {
    flex: 1,
    margin: 20,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  input: {
    flex: 1,
    height: 40,
    marginBottom: 5,
    color: 'gray',
  },
  menuBar: {
    height: 100,
  },
})