import { connect } from 'react-redux'
import EventList from './EventList'
import {
  getEventList,
} from './actions'

function mapStateToProps(state) {
  return {
    isLoading: state.events.isLoading,
    eventList: state.events.eventList,
    errorMessage: state.events.errorMessage,
  }
}

const EventListContainer = connect(mapStateToProps, { getEventList })(EventList)

export default EventListContainer