import { connect } from 'react-redux'
import Login from './Login'
import {
  login
} from './actions'

function mapStateToProps(state) {
  return {
    isLoading: state.auth.isLoading,
    user: state.auth.user,
    errorMessage: state.auth.errorMessage,
  }
}

const LoginContainer = connect(mapStateToProps, { login })(Login)

export default LoginContainer 