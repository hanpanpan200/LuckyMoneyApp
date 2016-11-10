import React, { PropTypes, Component } from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native'
import { Actions } from 'react-native-router-flux'

import { localDateTime } from '../utils/helpers'

export default class Event extends Component {
  static propTypes = {
    event: PropTypes.shape({
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.shape({
        iso: PropTypes.string.isRequired,
      }),
      phonenumber: PropTypes.string,
    })
  }

  detail() {
    
  }

  render() {
    const { name, amount, date } = this.props.event
    return (
      <TouchableOpacity onPress={this.detail}>
        <View style={styles.container}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.amountRow}>
            <Text style={styles.amount}>{amount} </Text> 
            for Wedding on {localDateTime(date.iso)}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column',
    height: 65,
    borderBottomWidth: 0.6,
    borderColor: 'gray',
  },
  name: {
    flex: 1,
    fontSize: 18,
    color: 'black',
  },
  amountRow: {
    flex: 1,
    fontSize: 16,
    color: 'gray',
  },
  amount: {
    fontWeight: 'bold',    
  },
})