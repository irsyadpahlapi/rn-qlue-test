import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet
} from 'react-native'
import ButtonList from './../components/ButtonList'
import ButtonMap from './../components/Buttonmap'
class Homescreen extends Component {
  static navigationOptions = {
      title: 'Home',
      headerStyle: {
          backgroundColor: '#1D97F6',
      },
      headerTitleStyle: { color: '#fff' }
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width:70,height:70}}
          source={{uri :'https://hacktiv8.com/img/avatar/alumni/bootcamp_prep-testimonials/Irsyad--md5--9cf77c4d27017dc3d86cfec4834a7af0.jpg'}} />
        <Text>irsyad pahlapi</Text>
        <ButtonList navigation={this.props.navigation}/>
        <ButtonMap navigation={this.props.navigation}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  }
});

export default Homescreen;
