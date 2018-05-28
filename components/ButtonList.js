import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native'
import styled from 'styled-components/native'

class ButtonList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  sendtolist = () => {
    this.props.navigation.navigate('List')
  }
  render() {
    return (
      <View style={styles.buttonlist}>
          <Button
            onPress={this.sendtolist}
            title="List"
            color="#841584"
          />
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
export default ButtonList;
