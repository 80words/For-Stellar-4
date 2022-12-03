import "react-native-gesture-handler"
import * as React from 'react';
import {NavigationContainer} from "@react-navigation/native" 
import {createStackNavigator} from "@react-navigation/stack"
import { Text, View, StyleSheet } from 'react-native';
import DailyPicScreen from "./Screens/DailyPic"
import SpaceCraftsScreen from "./Screens/SpaceCrafts"
import  StarMapScreen from "./Screens/StarMap" 
import  HomeScreen from "./Screens/Home" 
const Stack=createStackNavigator()
export default function App() {
  return (
  <NavigationContainer>
  <Stack.Navigator
  intialRouteName="Home"
  screenOptions={{
    headerShown:false
  }}
  >
  <Stack.Screen
  name="Home"
  component={HomeScreen}
  />
  <Stack.Screen
  name="StarMap"
  component={StarMapScreen}
  />
  <Stack.Screen
  name="SpaceCraft"
  component={SpaceCraftsScreen}
  />
  <Stack.Screen
  name="DailyPic"
  component={DailyPicScreen}
  />
  </Stack.Navigator>
  </NavigationContainer>
     

  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
   
    padding: 8,
  },
});
