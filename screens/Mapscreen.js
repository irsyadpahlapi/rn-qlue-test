import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Image,  ActivityIndicator } from 'react-native';
import PopupDialog from 'react-native-popup-dialog';
import { Marker } from 'react-native-maps';
import MapView from 'react-native-maps';
import { getlist } from '../store/list/ListAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Mapscreen extends Component {
  static navigationOptions = {
      title: 'Maps List',
      headerStyle: {
          backgroundColor: '#1D97F6',
      },
      headerTintColor: '#fff',
      headerTitleStyle: { color: '#fff' }
  }
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          kelurahan: '',
          imageUrl: '',
          description: '',
          region: {
              latitude: -6.920060,
              longitude: 107.617819,
              latitudeDelta: 2,
              longitudeDelta: 2,
          },
        }
    }

    componentDidMount() {
        this.props.getlist();
    }

    calloutOnPress(username, kelurahan, imageUrl, description) {
        this.setState({username,kelurahan,imageUrl,description})
        this.popupDialog.show();
    }

    render() {
      if (this.props.list.loading) {
        return (
          <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
              <ActivityIndicator size="small" color="#0000ff" />
          </View>
        )
      }
        return (
          <View style={styles.container}>
            <MapView
                style={styles.map}
                region={this.state.region}>
              {
                this.props.list.data.map(data => (
                  <Marker
                    key={data.id}
                    coordinate={
                      {
                        latitude: data.lat,
                        longitude: data.lng,
                      }
                    }
                    title={data.username}
                    description={data.kelurahan}
                    onCalloutPress={() => this.calloutOnPress(
                      data.username,
                      data.kelurahan,
                      data.image_url,
                      data.description
                    )}
                  />
                ))
              }
            </MapView>
            <PopupDialog
              ref={(popupDialog) => { this.popupDialog = popupDialog; }}
              width={'80%'}>
              <ScrollView style={styles.popup}>
                <View style={{alignItems:'center'}}>
                  <Text style={styles.username}>{this.state.username}</Text>
                  <Text style={styles.location}>{this.state.kelurahan}</Text>
                  <Image source={{ uri: this.state.imageUrl }} style={styles.image} />
                  <Text style={styles.description}>{this.state.description}</Text>
                </View>
                </ScrollView>
            </PopupDialog>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    containerLoading: {
        flex: 1,
        justifyContent: 'center'
    },
    popup: {
        backgroundColor: '#fff',
        margin: 12
    },
    username: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    location: {
        color: '#808080',
        marginBottom: 10
    },
    image: {
        height: 200, width: 200
    },
    description: {
        marginTop: 8,
        color: '#000000'
    },
    time: {
        color: '#d3d3d3',
        marginTop: 2
    }
});

const mapStateToProps = state => {
    return {
        list: state.listdata
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getlist
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Mapscreen);
