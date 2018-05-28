import React, { Component } from 'react'
import { View, Text, FlatList, RefreshControl, ActivityIndicator } from 'react-native'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getlist } from '../store/list/ListAction';
import Showlist from './../components/Showlist'

class Listscreen extends React.Component {
  static navigationOptions = {
      title: 'List Komplain',
      headerStyle: {
          backgroundColor: '#1D97F6',
      },
      headerTintColor: '#fff',
      headerTitleStyle: { color: '#fff' }
  }
  constructor() {
    super();
    this.state = {
        load: false
    }
  }

  componentDidMount() {
    this.props.getlist();
  }

  onRefresh() {
    this.setState({ load: true });
    this.props.getlist();
    if(!this.props.list.loading){
        this.setState({ load: false });
    }
  }


  render() {
    if (this.props.list.loading) {
      return (
        <View>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }
    return (
      <View>
        <FlatList
          data={this.props.list.data}
          renderItem={ ({ item }) => {
            return (
              <View>
                 <Showlist datalist={item} key={`${item.id}`} navigation={this.props.navigation} />
              </View>
            )
            }
          }
          keyExtractor = {(item, index) => `${item.id}`}
          refreshControl={
            <RefreshControl
              refreshing={this.state.load}
              onRefresh={this.onRefresh.bind(this)}
            />
          }
      />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.listdata
  }
}
const mapDispatchToProps = (dispatch) => bindActionCreators({
    getlist
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Listscreen);
