import React from 'react';
import { View, ImageBackground, StyleSheet, Image, Text, Button , ScrollView,SafeAreaView, Pressable} from 'react-native';

function MainPage({ navigation }) {
    const bg = require("../assets/princess.png")
    const eventDesc = require("../assets/eventDesc.png")
    const back = require("../assets/backIcon.png")

    return (
    <ImageBackground
        style={styles.background}
        source={bg}  
    >
     <Pressable onPress={() => [navigation.navigate('Welcome'),console.log("tapped")]}>
        <Image style={styles.logo} source={back} />
     </Pressable>

    {/* <SafeAreaView>
        <ScrollView style={styles.scrollView}>
            <Image style={{width:'50%'}}source={eventDesc} />
        </ScrollView>
    </SafeAreaView> */}
       
    </ImageBackground>
    );
};


const styles = StyleSheet.create({

    background: {
        flex: 1,
        height:'50%',
        // justifyContent: 'flex-start',
        // alignItems:'center',
    },

    buttonStyle:{
        position:'absolute',
        width: '100%',
        height: 70,
        backgroundColor: '#4ECDC4',
        top:100,
    },

    scrollView: {
        backgroundColor:'blue'
    },
    logo:{
        width: 30,
        height: 30,
        top:20,
        position:'absolute',
    },
})

export default MainPage;