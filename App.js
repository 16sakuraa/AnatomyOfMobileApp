import { StatusBar } from 'expo-status-bar';
import { useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import { StyleSheet, Dimensions, Text, View, TouchableNativeFeedback, Button, Image, Alert, SafeAreaView,Platform} from 'react-native';

export default function App() {
  console.log(useDeviceOrientation())
  const {landscape} = useDeviceOrientation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: '#fff',
        flex : 1,
      }}>
        <View style={{
          backgroundColor:'dodgerblue',
          flex : 2,
        }}/>
        <View style={{
          backgroundColor:'gold',
          flex : 1,
        }}/>
        <View style={{
          backgroundColor:'tomato',
          flex : 1,
        }}/>
      </View>
      {/* <Button 
        color="orange"
        title="Click Me"
        onPress={() => 
          Alert.alert("My Title","This is my message.",[
          {text:"Yes", onPress: () => console.log("Yes")},
          {text:"No", onPress: () => console.log("No")},
          ])
        }/> */}
      {/* <Text>Hello, This is my first ReactNative project. I'm sooooooo excited!</Text>
      <TouchableNativeFeedback onPress={()=> console.log("Image Tab!")}>
        <View style={{width:200,height:70,backgroundColor: "blue"}}></View>
        <Image 
        fadeDuration={300}
        source={{
          width:200,
          height:300,
          uri: "https://picsum.photos/200/300",
          }}
        />

      </TouchableNativeFeedback> */}
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
