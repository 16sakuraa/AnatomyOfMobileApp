import React, { useRef } from 'react';
import { useState } from 'react';
import { View, ImageBackground, StyleSheet, Image, Text, Pressable, PanResponder, Animated,ScrollView,SafeAreaView } from 'react-native';

function MyEvent({ navigation }) {
    const bg = require("../assets/princess.png")
    const mainbg = require("../assets/blossombg.jpg")
    const eventDesc = require("../assets/eventDesc.png")
    const back = require("../assets/backIcon.png")
    const locationIcon = require("../assets/location.png")
    const timeIcon = require("../assets/time.png")
    const calendarIcon = require("../assets/calendar.png")
    const notiIcon = require("../assets/notification.png");
    const star = require("../assets/starlogo.png");
    const exploreIcon = require("../assets/exploreIcon.png");
    const myevent = require("../assets/myevent.png");
    const commu = require("../assets/commu.png");
    const profile = require("../assets/profile.png");


    const join = require("../assets/joinGroup.png")
    const groupChat = require("../assets/groupChat.png")


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={star} />
                    <Text style={styles.titleText}>Fiestasy</Text>
                </View>
                <Pressable onPress={() => [navigation.navigate('Main'),console.log("tapped")]}>
                    <Image style={styles.noti} source={notiIcon}  />
                </Pressable>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>My Events</Text>
                </View>
            </View>
            
                        <View style={styles.mainContent}>

                            
                        </View>

            <View style={styles.navBar}>
                <Pressable style={styles.navBarItem} onPress={() => [navigation.navigate('Welcome'),console.log("tapped")]}>
                    <Image source={exploreIcon} />
                    <Text style={styles.navBarText}>Explore</Text>
                </Pressable>
                <Pressable style={styles.navBarItem} onPress={() => [navigation.navigate('MyEvent'),console.log("tapped")]}>
                    <Image source={myevent} />
                    <Text style={styles.navBarText}>My Event</Text>
                </Pressable>
                <Pressable style={styles.navBarItem} onPress={() => [navigation.navigate('Community'),console.log("tapped")]}>
                    <Image source={commu} />
                    <Text style={styles.navBarText}>Community</Text>
                </Pressable>
                <View style={styles.navBarItem}>
                    <Image source={profile} />
                    <Text style={styles.navBarText}>Profile</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    buttonContainer:{
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',
        top:15,
    },
    roundButton: {
        marginHorizontal: 10, // Adjust this value as needed

    },
    header: {
        paddingTop: 40,
        paddingHorizontal: 15,
    },
    headerContainer:{
        top:5,
        marginLeft:5,
    },
    headerText:{
        fontWeight:'bold',
        fontSize:30,
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 30,
        height: 30,
    },
    titleText: {
        marginLeft: 10,
        fontSize: 25,
        fontWeight: 'bold',
    },
    mainContent: {
        flex: 1,
        flexDirection:'column',
    },
    noti:{
        position: 'absolute',
        marginLeft: 320,
        width: 35,
        top:-30,
        height: 35,
    },
    navBar: {
        height: 70,
        backgroundColor: 'white',
        borderColor: '#7766C6',
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    navBarItem: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    navBarText: {
        fontSize: 12, 
    },
    Timeline:{
        justifyContent:'center',
        alignItems: 'center', // Add this line
        alignContent:'center',
    }
});

export default MyEvent;
