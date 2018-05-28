import React, { Component } from 'react';
import {
  View,
  Button,
  StyleSheet
} from 'react-native'


class ButtonMap extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  sendtomap = () => {
    this.props.navigation.navigate('Maps')
  }

  render() {
    return (
      <View style={styles.buttonmap}>
          <Button
            onPress={this.sendtomap}
            title="map"
            color="#841584"
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonmap: {
      width: '80%',
      marginTop: 10,
      marginBottom: 5
  }
});
export default ButtonMap;
