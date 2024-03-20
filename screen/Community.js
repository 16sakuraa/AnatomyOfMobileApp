import React, { useRef } from 'react';
import { useState } from 'react';
import { View,  StyleSheet, Image, Text, Pressable, PanResponder, Animated } from 'react-native';

function Community({ navigation }) {
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
    const event1 = require("../assets/event1.png");
    const card = require("../assets/card.png");
    const cardBG = require("../assets/cardBGnew.png")
    const group1 = require("../assets/chatgroup1.png")
    const group2 = require("../assets/chatgroup2.png")



    const join = require("../assets/joinGroup.png")
    const groupChat = require("../assets/groupChat.png")

    const [showGroupChat, setShowGroupChat] = useState(false);

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
                    <Text style={styles.headerText}>Community</Text>
                </View>
            </View>
            <View style={styles.mainContent}>
                <View style={styles.buttonContainer}>
                    <Pressable>
                        <Image style={styles.roundButton} source={join}A />
                    </Pressable>
                    <Pressable style={styles.navBarItem} onPress={() => [navigation.navigate('Chat'),console.log("tapped")]}>
                        <Image style={styles.roundButton} source={groupChat}  />
                    </Pressable>
                </View>

                        <View style={styles.card}>
                            <View style={styles.cardImage}>
                                <Image style={styles.cardBG} source={cardBG} />
                                <Image style={styles.eventCard} source={group1} />
                                <Image style={styles.eventCardTrans} source={card} />
                                
                            </View>
                            <View style={styles.cardTextContainer}>
                                <Text style={styles.cardText}>Shuun’s BFF</Text>
                                <View style={styles.sub}>
                                
                                        <Image style={styles.logoText} source={calendarIcon} />
                                        <Text style={styles.subText}>06/04/2024</Text>
                                        <View style={ {left:10 ,flexDirection:'row'}}>
                                        <Image style={styles.logoText} source={timeIcon} />
                                        <Text style={styles.subText}>10:00-17:30</Text>
                                        </View>
    
                                </View>
                                <View style={styles.sub}>
                                    <Image style={styles.logoText} source={locationIcon} />
                                    <Text style={styles.subText}>TOASTO cafe & bakery</Text>
                                </View>
                            </View>
                        </View>
                    <View style={styles.card}>
                            <View style={styles.cardImage}>
                                <Image style={styles.cardBG} source={cardBG} />
                                <Image style={styles.eventCard} source={group2} />
                                <Image style={styles.eventCardTrans} source={card} />
                                
                            </View>
                            <View style={styles.cardTextContainer}>
                                <Text style={styles.cardText}>Pawn of Grimm</Text>
                                <View style={styles.sub}>
                                
                                        <Image style={styles.logoText} source={calendarIcon} />
                                        <Text style={styles.subText}>06/04/2024</Text>
                                        <View style={ {left:10 ,flexDirection:'row'}}>
                                        <Image style={styles.logoText} source={timeIcon} />
                                        <Text style={styles.subText}>10:00-17:30</Text>
                                        </View>
    
                                </View>
                                <View style={styles.sub}>
                                    <Image style={styles.logoText} source={locationIcon} />
                                    <Text style={styles.subText}>TOASTO cafe & bakery</Text>
                                </View>
                            </View>
                        </View>
                    
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
                <View style={styles.navBarItem}>
                    <Image source={commu} />
                    <Text style={styles.navBarText}>Community</Text>
                </View>
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
        top:55,
        
    },
    roundButton: {
        marginHorizontal: 10, // Adjust this value as needed

    },
    header: {
        paddingTop: 50,
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
    logoText: {
        width: 20,
        height: 20,
        marginRight:5,
    },
    titleText: {
        marginLeft: 10,
        fontSize: 25,
        fontWeight: 'bold',
    },
    mainContent: {
        flex: 1,
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
    card:{
        flexDirection:'column',
        height:220,
        marginBottom: 10,
        top:70,
        
    },
    header:{
        top:40,
        marginLeft:20,
    },
    seeMore:{
        alignItems:'center',
        justifyContent:'center',
    },  
    headerText:{
        fontWeight:'bold',
        fontSize:30,
    },
    cardText:{

        fontWeight:'bold',
        fontSize:25,


    },
    subText:{
        fontSize:15,

    },
    cardTextContainer:{
        left:40,
    },
    sub:{
        flexDirection:'row',
        width:'auto',
        top:5,

    },
    cardImage:{
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardBG:{
        position:'absolute',
        top:20,
    },
    eventCardTrans:{
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        position:'absolute'

    }
});

export default Community;
