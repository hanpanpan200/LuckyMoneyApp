import React, { Component, PropTypes } from 'react'
import {
  ListView,
} from 'react-native'

import Event from './Event'

export default class EventList extends Component {
  static propTypes = {
    eventList: PropTypes.array,
    getEventList: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => {r1 != r2}})
    this.state = {
      dataSource: this.ds.cloneWithRows([])
    }
  }

  componentWillMount() {
    this.props.getEventList()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.eventList) {
      this.setState({dataSource: this.ds.cloneWithRows(nextProps.eventList)})
    }
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => {<Event event={rowData} />}}
        enableEmptySections={true}
      />
    )
  }
}