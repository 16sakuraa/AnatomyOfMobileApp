import React from 'react';
import { View, ImageBackground, StyleSheet, Image, Text, Button } from 'react-native';

function MainPage({ navigation }) {
    const bg = require("../assets/blossombg.jpg")
    return (
    <ImageBackground
        style={styles.background}
        source={bg}  
    >
        <Button title="Button" onPress={() => [navigation.navigate('Welcome'),console.log("tapped")]}/>
    </ImageBackground>
    );
};


const styles = StyleSheet.create({

    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems:'center',

    },

    buttonStyle:{
        width: '100%',
        height: 70,
        backgroundColor: '#4ECDC4'
    }
})

export default MainPage;