import React, { Component, PropTypes } from 'react'
import { 
  View,
  Text,
  Image,
  TextInput,
  StyleSheet, 
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import DatePicker from 'react-native-datepicker'

import { getValueByRef } from '../utils/helpers'

export default class EventNew extends Component {
  static propTypes = {
    errorMessage: PropTypes.string,
    createEvent: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {date: ''}
  }

  createEvent = () => {
    this.props.createEvent({
      data: {
        name: getValueByRef(this, 'name'),
        amount: getValueByRef(this, 'amount'),
        date: this.state.date,
        phoneNumber: getValueByRef(this, 'phoneNumber')
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={require('../image/heroImage.png')}
          style={styles.image}
          resizeMode={Image.resizeMode.cover}
        >
          <Icon name='angle-down' size={35} color='white' style={styles.backButton} />        
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
            <DatePicker
              style={styles.dateInput}
              date={this.state.date}
              showIcon={false}
              placeholder='Select date'
              format='YYYY-MM-DD HH:mm'
              minDate='2000-01-01'
              maxDate='2020-01-01'
              mode='datetime'
              confirmBtnText='Confirm'
              cancelBtnText='Cancel'
              customStyles={{
                dateInput: {
                  borderWidth: 0,
                  height: 60,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
                dateText: {
                  color: '#1e1e1e',
                  fontWeight: '400',
                  fontSize: 16,
                  position: 'absolute',
                  left: 0,
                  top: 20,
                },
                placeholderText: {
                  color: 'gray',
                  fontSize: 16,
                  position: 'absolute',
                  left: 0,
                  top: 20,
                },
              }}
              onDateChange={(date) => {this.setState({date: date})}}
            />
            <TextInput 
              ref='phoneNumber'
              autoCapitalize='none'    
              placeholder='Phone number' 
              placeholderTextColor='gray' 
              style={styles.input} 
            />
          </View>
          <TouchableOpacity style={styles.menuBar} onPress={this.createEvent}>
            <Text style={styles.menuText}>Add</Text>
          </TouchableOpacity>
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
    height: 60,
    marginBottom: 5,
    color: '#1e1e1e',
  },
  dateInput: {
    width: 250,
    height: 40,
    borderWidth: 0,
  },
  menuBar: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  menuText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray',
  },
})