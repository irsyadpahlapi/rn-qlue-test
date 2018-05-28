import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image
} from 'react-native'
import moment from 'moment';

class Showlist extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <View style={{flexDirection:'row', alignItems:'center', padding:12}}>
        <View>
          <Image source={{ uri: this.props.datalist.image_url }} style={{width:50,height:50}}/>
        </View>
        <View style={{padding:20}}>
          <Text>username: {this.props.datalist.username}</Text>
          <Text>kelurahan: {this.props.datalist.kelurahan}</Text>
          <Text>deskripsi: {this.props.datalist.description}</Text>
          <Text>{moment(this.props.datalist.timestamp).startOf('hour').fromNow()}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonlist: {
      width: '80%',
      marginTop: 10,
      marginBottom: 5
  }
});
export default Showlist;
