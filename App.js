import { StatusBar } from 'expo-status-bar';
import { useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import WelcomeScreen from './screen/WelcomeScreen.js';
import Community from './screen/Community.js';
import MyEvent from './screen/MyEvent.js';
import Event1 from './screen/Event1.js';
import Chat from './screen/Chat.js';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StyleSheet, Dimensions, Text, View, TouchableNativeFeedback, Button, Image, Alert, SafeAreaView,Platform, ImageBackground} from 'react-native';
import MainPage from './screen/MainPage.js';

export default function App() {
  console.log(useDeviceOrientation())
  const Stack = createNativeStackNavigator();
  const {landscape} = useDeviceOrientation();
  const bgImage = require("./assets/background.jpg");
  const logo = require("./assets/logo-red.png");
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          // options={{title: 'Welcome'}}
        />
        <Stack.Screen 
          name="Main" 
          component={MainPage} />
          <Stack.Screen 
          name="Event1" 
          component={Event1} />
          <Stack.Screen 
          name="MyEvent" 
          component={MyEvent} />
          <Stack.Screen 
          name="Community" 
          component={Community} />
          <Stack.Screen 
          name="Chat" 
          component={Chat} />
      </Stack.Navigator>
      
    </NavigationContainer>
    
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bgImage : {
    flex: 1,
    alignItems: 'center',
  },

  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },

  logo : {
    width: 100,
    height: 100,
  }
});
