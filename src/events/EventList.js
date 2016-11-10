import React, { Component, PropTypes } from 'react'
import {
  ListView,
  StyleSheet,
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

  renderRow = (rowData) => {
    return <Event event={rowData} />
  } 

  render() {
    return (
      <ListView
        style={styles.list}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        enableEmptySections={true}
      />
    )
  }
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
    marginTop: 64,
    backgroundColor: '#fbdede',
  },
})
