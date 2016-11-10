import React, { Component, PropTypes } from 'react'
import {
  View,
  ListView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Actions } from 'react-native-router-flux'

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
      <View style={styles.container}>
        <ListView
          style={styles.list}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          enableEmptySections={true}
        />
        <TouchableOpacity 
          onPress={() => { Actions.eventNew() }} 
          style={styles.iconContainer}
        >
          <Icon name='plus-circle' size={40} color='#ec4d50' style={styles.addIcon}/>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbdede',
  },
  list: {
    padding: 16,
    marginTop: 64,
  },
  addIcon: {
    margin: 10,
  },
  iconContainer: {
    width: 60,
    height: 60,
  },
})
