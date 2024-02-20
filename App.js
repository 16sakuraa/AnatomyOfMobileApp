import { StatusBar } from 'expo-status-bar';
import { useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import WelcomeScreen from './screen/WelcomeScreen.js';
import { StyleSheet, Dimensions, Text, View, TouchableNativeFeedback, Button, Image, Alert, SafeAreaView,Platform, ImageBackground} from 'react-native';

export default function App() {
  console.log(useDeviceOrientation())
  const {landscape} = useDeviceOrientation();
  const bgImage = require("./assets/background.jpg");
  const logo = require("./assets/logo-red.png");
  return (
    <WelcomeScreen></WelcomeScreen>
      
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
