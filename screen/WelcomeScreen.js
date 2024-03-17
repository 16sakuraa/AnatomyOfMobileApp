import React from 'react';
import { View, ImageBackground, StyleSheet, Image, Text, Button } from 'react-native';
import { ImageSlider } from "react-native-image-slider-banner";

function WelcomeScreen({ navigation }) {
    const bgImage = require("../assets/background.jpg");
    const star = require("../assets/starlogo.png");
    const gradientBG = require("../assets/gradient.png");
    const notiIcon = require("../assets/notification.png");

    return (
        <ImageBackground 
            style={styles.background}
            source={bgImage}>
            <ImageBackground style={styles.gradient} source={gradientBG}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={star} />
                    <Text style={styles.titleText}>Fiestasy</Text>
                </View>
                <View>
                    <Image style={styles.noti} source={notiIcon} />
                </View>
                <View>
                <ImageSlider style={styles.banner}
                    data={[
                        {img: 'https://img2.pic.in.th/pic/image-frame.png'},
                        {img: 'https://img2.pic.in.th/pic/image-frame.png'},
                        {img: 'https://img2.pic.in.th/pic/image-frame.png'}
                    ]}
                    autoPlay={false}
                    onItemChanged={(item) => console.log("item", item)}
                    closeIconColor="#fff"
                />
                </View>
            </ImageBackground>
            
            <View styles={styles.categories}>
                <Text styles={styles.categoryText}>Categories</Text>
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
        alignItems: 'left',
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
        width: 30,
        height: 30,
        marginTop:5,
        top:30,
        position:'absolute',
    },
    logoContainer:{
        marginTop: 70,
        marginLeft:20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleText:{
        marginLeft: 35,
        fontSize: 25,
        top:30,
        fontWeight: 'bold',
    },
    gradient:{
        position: 'absolute',
        height:370,
        top:-50,
        width: '100%',
    },

    noti:{
        position: 'absolute',
        marginLeft: 325,
        width: 35,
        height: 35,
    },
    banner:
    {
        top:-20,
        height: 40,
    },
    categories:{
        position:'absolute',
        top:70,
    },
    categoryText:
    {
        marginLeft: 35,
        fontSize: 25,
        
        fontWeight: 'bold',
    }
});

export default WelcomeScreen;