import React, { PropTypes } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

export default function Event(props) {
  const { name, amount, date, phonenumber } = props.event
  return (
    <View style={styles.container}>
      <Text style={styles.item}>{name}</Text>
      <Text style={styles.amount}>{amount}</Text>
      <Text style={styles.date}>{date.iso}</Text>
      <Text style={styles.item}>{phonenumber}</Text>
    </View>
  )
}

Event.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    date: PropTypes.shape({
      iso: PropTypes.string.isRequired,
    }),
    phoneNumber: PropTypes.string,
  })
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'row',
    marginTop: 64,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
  },
  amount: {
    flex: 0.5,
    flexDirection: 'row',
  },
  date: {
    flex: 1.5,
    flexDirection: 'row',
  },
})