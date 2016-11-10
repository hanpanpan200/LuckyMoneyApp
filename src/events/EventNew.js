import React, { Component, PropTypes } from 'react'
import { 
  View,
  Image,
  StyleSheet, 
} from 'react-native'

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
        />
        <View style={styles.inputContainer}>
          
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    height: 300,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: 'red',
  }
})