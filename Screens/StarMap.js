import React, { Component } from 'react';
import {
  Text,
  View,
  Platform,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  TextInput,
  Image,
} from 'react-native';
import { WebView } from 'react-native-webview';

export default class StarMapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: '',
      longitude: '',
    };
  }
  render() {
    const { longitude, latitude } = this.state;
    const path = `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false`;

    return (
      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground source={require('stars.gif')} style={styles.bgImage}>
          <View style={styles.input}>
            <Text style={styles.container}>StarMapScreen</Text>
          </View>

          <View>
            <WebView
              scalesPageToFit={true}
              source={{ uri: path }}
              style={{ marginTop: 20, marginBottom: 20 }}
            />
          </View>

          <View>
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                marginTop: 10,
              }}
              placeholder="enter your latitude"
              placeholderTextColor="black"
              onChangeText={(text) => {
                this.setState({
                  latitude: text,
                });
              }}
            />

            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              placeholder="enter your longitude"
              placeholderTextColor="black"
              onChangeText={(text) => {
                this.setState({
                  longitude: text,
                });
              }}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    justifyContent: 'center',
    alignContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderRadious: 20,
    borderWidth: 1,
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
    color: 'white',
    textAlign: 'center',
  },
  droidSafeArea: {
    marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginTop: -30,
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  routeCard: {
    flex: 0.25,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 100,
    marginBottom: -50,
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  routeText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 75,
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  iconImage: {
    position: 'absolute',
    height: 150,
    width: 100,
    resizeMode: 'contain',
    right: 20,
    top: -60,
  },
  mainIcon: {
    position: 'absolute',
    height: 150,
    width: 150,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 100,
    marginTop: -40,
  },
  knowmore: {
    paddingLeft: 30,
    color: 'blue',
    fontSize: 20,
  },
  digit: {
    position: 'absolute',
    color: 'rgba(180,180,180,0.5)',
    fontSize: 100,
    right: 25,
    zIndex: -1,
  },
});
