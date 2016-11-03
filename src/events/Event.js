import React, { PropTypes } from 'react'
import {
  View,
  Text,
} from 'react-native'

export default function Event(props) {
  const { name, amount, date, phoneNumber } = props.event
  return (
    <View>
      <Text>{name}</Text>
      <Text>{amount}</Text>
      <Text>{date}</Text>
      <Text>{phoneNumber}</Text>
    </View>
  )
}

Event.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string,
  })
}