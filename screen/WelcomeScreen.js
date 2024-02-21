import React from 'react';
import { View, ImageBackground, StyleSheet, Image, Text, Button } from 'react-native';

function WelcomeScreen({ navigation }) {
    const bgImage = require("../assets/background.jpg");
    const logo = require("../assets/logo-red.png");

    return (
        <ImageBackground 
            style={styles.background}
            source={bgImage}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={logo} />
                <Text>Sell what you don't need</Text>
            </View>

            <View style={styles.loginButton}>
                <Button 
                    title="Login"
                    onPress={() => [navigation.navigate('Main'),console.log("tapped")]} // Navigate to 'Main' screen
                />
            </View>

            <View style={styles.registerButton}>
                <Text> Register </Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    loginButton:{
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65',
        alignItems: 'center',
        justifyContent: 'center',
    },
    registerButton:{
        width: '100%',
        height: 70,
        backgroundColor: '#4ECDC4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        width: 100,
        height: 100,
    },
    logoContainer:{
        position: 'absolute',
        top: 70,
        alignItems: 'center',
    }
});

export default WelcomeScreen;