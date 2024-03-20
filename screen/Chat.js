import React, { useRef } from 'react';
import { useState } from 'react';
import { View,  StyleSheet, Image, Text, Pressable, PanResponder, Animated } from 'react-native';

function Community({ navigation }) {

    const notiIcon = require("../assets/notification.png");
    const star = require("../assets/starlogo.png");
    const exploreIcon = require("../assets/exploreIcon.png");
    const myevent = require("../assets/myevent.png");
    const commu = require("../assets/commu.png");
    const profile = require("../assets/profile.png");
    const chat1 = require("../assets/chat1.png")
    const chat2 = require("../assets/chat2.png")
    const chat3 = require("../assets/chat3.png")


    

    const join = require("../assets/joinGroupUnclick.png")
    const groupChat = require("../assets/groupChatClick.png")


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
                    <Pressable onPress={() => [navigation.navigate('Community'),console.log("tapped")]}>
                        <Image style={styles.roundButton} source={join}A />
                    </Pressable>
                    <Pressable>
                        <Image style={styles.roundButton} source={groupChat}  />
                    </Pressable>
                </View>

                <View style={styles.chatContainer}>
                    <View style={{marginBottom:20}}>
                        <View style={{flexDirection:'row',paddingHorizontal:20}}>
                            <Image style={styles.chatPic} source={chat1}  />
                            <View style={{flexDirection:'column',paddingLeft:15,top:5}}>
                                <Text style={styles.chatHeader}>Shuun's BFF</Text>
                                <Text style={styles.chatMessage}>Lets meet at the park !</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{marginBottom:20}}>
                        <View style={{flexDirection:'row',paddingHorizontal:20}}>
                            <Image style={styles.chatPic} source={chat3}  />
                            <View style={{flexDirection:'column',paddingLeft:15,top:5}}>
                                <Text style={styles.chatHeader}>Biscuit</Text>
                                <Text style={styles.chatMessage}>Sent: at what time again?</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{marginBottom:20}}>
                        <View style={{flexDirection:'row',paddingHorizontal:20}}>
                            <Image style={styles.chatPic} source={chat2}  />
                            <View style={{flexDirection:'column',paddingLeft:15,top:5}}>
                                <Text style={styles.chatHeader}>Pawn of Grimm</Text>
                                <Text style={styles.chatMessage}>Sounds good</Text>
                            </View>
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
    chatHeader:{
        fontSize:20,
        fontWeight:'bold',
    },
    chatMessage:{
        fontSize:15,

    },
    chatContainer:{
        top:75,
    }
});

export default Community;
