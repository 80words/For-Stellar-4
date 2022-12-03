import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native'; 

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground 
        source={require("space.gif")}
        style={styles.bgImage}
        >
        <View style={styles.titleBar}>
          <Text style={styles.titleText}>Home Screen!</Text>
        </View>
   <View>     
<Image
          source={require("main-icon.png")}
          style={styles.mainIcon}
          />
          </View>
        <TouchableOpacity style={styles.routeCard}
        onPress={() => this.props.navigation.navigate("DailyPic")}
        >
          <Text style={styles.routeText}>DailyPic</Text>
            <Text style={styles.knowmore}>{"know more"}</Text>
          <Text style={styles.digit}>1</Text>
          <Image
          source={require("daily_pictures.png")}
          style={styles.iconImage}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.routeCard}
        onPress={() => this.props.navigation.navigate("StarMap")}
        
        >
          <Text style={styles.routeText}>StarMap</Text>
          <Text style={styles.knowmore}>{"know more"}</Text>
          <Text style={styles.digit}>2</Text>
           <Image
          source={require("star_map.png")}
          style={styles.iconImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.routeCard}
        onPress={() => this.props.navigation.navigate("SpaceCraft")}
        
        >
          <Text style={styles.routeText}>SpaceCrafts</Text>
          <Text style={styles.knowmore}>{"know more"}</Text>
          <Text style={styles.digit}>3</Text>
           <Image
          source={require("space_crafts.png")}
          style={styles.iconImage}
          />
        </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color:"white",
    marginTop:-30
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
    marginBottom:-50,
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
   flex:1,
   resizeMode:"cover"

  },
  iconImage: {
   position:"absolute",
height:150,
width:100,
resizeMode:"contain",
right:20,
top:-60,
  },
    mainIcon: {
   position:"absolute",
height:150,
width:150,
resizeMode:"contain",
justifyContent:"center",
alignItems:"center",
marginLeft:100,
marginTop:-40,
  },
   knowmore: {
    paddingLeft:30,
    color:"blue",
    fontSize:20,
  },
  digit:{
    position:"absolute",
    color:"rgba(180,180,180,0.5)",
    fontSize:100,
right:25,
zIndex:-1,
  }
});