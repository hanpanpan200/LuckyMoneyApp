import { Alert } from 'react-native'
import moment from 'moment-timezone'

export function alert(message, title = 'Notice') {
  Alert.alert(title, message)
}

export function localDateTime(dateStr) {
  if (dateStr && moment(dateStr).isValid()) {
    return moment(dateStr).format('YYYY-MM-DD HH:mm')
  }
  return null
}