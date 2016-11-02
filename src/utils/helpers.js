import { Alert } from 'react-native'

export function alert(message, title = 'Notice') {
  Alert.alert(title, message)
}