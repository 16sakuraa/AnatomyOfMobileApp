import React , { useState } from 'react';
import { View, ImageBackground, StyleSheet, Image, Text, Button, Pressable,ScrollView,SafeAreaView} from 'react-native';
import { ImageSlider } from "react-native-image-slider-banner";
function WelcomeScreen({ navigation }) {
    const bgImage = require("../assets/whitebg.jpg");
    const star = require("../assets/starlogo.png");
    const gradientBG = require("../assets/gradient.png");
    const notiIcon = require("../assets/notification.png");
    const allIcon = require("../assets/allicon.png");
    const artIcon = require("../assets/articon.png");
    const exploreIcon = require("../assets/exploreIcon.png");
    const myevent = require("../assets/myevent.png");
    const commu = require("../assets/commu.png");
    const profile = require("../assets/profile.png");
    const event1 = require("../assets/event1.png");
    const card = require("../assets/card.png");
    const cardBG = require("../assets/cardBGnew.png")


    const [activeButton, setActiveButton] = useState('All');

    return (
        <ImageBackground 
            style={styles.background}
            source={bgImage}>
            <ImageBackground style={styles.gradient} source={gradientBG}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={star} />
                    <Text style={styles.titleText}>Fiestasy</Text>
                </View>
                <Pressable onPress={() => [navigation.navigate('Main'),console.log("tapped")]}>
                    <Image style={styles.noti} source={notiIcon}  />
                    </Pressable>
                <View>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Popular Event</Text>
                </View>
                <View style={styles.banner} >
                <ImageSlider
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
                </View>
                <View style={styles.categories}>
                    <Text style={styles.categoryText}>Categories</Text>
                </View>
                
                
                <View style={styles.buttonContainer}>
                    <Pressable
                        style={activeButton === 'All' ? styles.Allbutton : styles.AllbuttonUnclicked}
                        onPress={() => setActiveButton('All')}
                    >
                        <Image style={styles.logoText} source={allIcon} />
                        <Text style={activeButton === 'All' ? styles.text : styles.textUnclicked}>All</Text>
                    </Pressable>
                    <Pressable
                        style={activeButton === 'Art' ? styles.Allbutton : styles.AllbuttonUnclicked}
                        onPress={() => setActiveButton('Art')}
                    >
                        <Image style={styles.logoText} source={artIcon} />
                        <Text style={activeButton === 'Art' ? styles.text : styles.textUnclicked}>Art</Text>
                    </Pressable>
                    <Pressable
                        style={activeButton === 'Dance' ? styles.Allbutton : styles.AllbuttonUnclicked}
                        onPress={() => setActiveButton('Dance')}
                    >
                        <Image style={styles.logoText} source={artIcon} />
                        <Text style={activeButton === 'Dance' ? styles.text : styles.textUnclicked}>Dance</Text>
                    </Pressable>
                </View>

                <SafeAreaView style={styles.container}>
                    <ScrollView style={styles.scrollView}>

                        <View style={styles.card}>
                            <View style={styles.cardImage}>
                                <Image style={styles.cardBG} source={cardBG} />
                                <Image style={styles.eventCard} source={event1} />
                                <Image style={styles.eventCardTrans} source={card} />
                                
                            </View>
                            <View>
                                <Text style={styles.cardText}>Prince Euthalia's falling i...</Text>
                            </View>

                        </View>

                        <View style={styles.card}>
                            <View style={styles.cardImage}>
                                <Image style={styles.cardBG} source={cardBG} />
                                <Image style={styles.eventCard} source={event1} />
                                <Image style={styles.eventCardTrans} source={card} />
                                
                            </View>
                            <View>
                                <Text style={styles.cardText}>Prince Euthalia's falling i...</Text>
                            </View>

                        </View>

                        <View style={styles.card}>
                            <View style={styles.cardImage}>
                                <Image style={styles.cardBG} source={cardBG} />
                                <Image style={styles.eventCard} source={event1} />
                                <Image style={styles.eventCardTrans} source={card} />
                                
                            </View>
                            <View>
                                <Text style={styles.cardText}>Prince Euthalia's falling i...</Text>
                            </View>

                        </View>


                        {/* <Text style={styles.testtext}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        </Text> */}
                    </ScrollView>
                </SafeAreaView>

               
            </ImageBackground>


            <View style={styles.navBar}>
                <View style={styles.navBarItem}>
                    <Image source={exploreIcon} />
                    <Text style={styles.navBarText}>Explore</Text>
                </View>
                <View style={styles.navBarItem}>
                    <Image source={myevent} />
                    <Text style={styles.navBarText}>My Event</Text>
                </View>
                <View style={styles.navBarItem}>
                    <Image source={commu} />
                    <Text style={styles.navBarText}>Community</Text>
                </View>
                <View style={styles.navBarItem}>
                    <Image source={profile} />
                    <Text style={styles.navBarText}>Profile</Text>
                </View>
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
        top:10,
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
        top:10,
        fontWeight: 'bold',
    },
    gradient:{
        position: 'absolute',
        height:380,
        top:-40,
        width: '100%',
    },

    noti:{
        position: 'absolute',
        marginLeft: 325,
        width: 35,
        top:-20,
        height: 35,
    },
    banner:
    {
        top:-30
        
    },
    categories:{
        position:'absolute',
        top:75,
    },
    categoryText:
    {
        marginLeft: 20,
        fontSize: 25,
        top:310,
        fontWeight: 'bold',
    },
    Allbutton: {
        marginRight:5,        
        paddingHorizontal: 20, // Adjust this value as needed 
        paddingTop: 7,
        paddingBottom: 7,
        backgroundColor: '#7766C6',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#fff',
        textAlign: 'center',
        top:-15,
        alignSelf: 'baseline',
        flexDirection: 'row',
    },
    AllbuttonUnclicked: {
        marginRight:5,        
        paddingHorizontal: 20, // Adjust this value as needed 
        paddingTop: 7,
        paddingBottom: 7,
        backgroundColor: '#E0DFFD',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#fff',
        textAlign: 'center',
        top:-15,
        alignSelf: 'baseline',
        flexDirection: 'row',
    },
      text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
    },
    textUnclicked: {
        color: '#7766C6',
        textAlign: 'center',
        fontSize: 15,
    },
    logoText: {
        width: 20,
        height: 20,
        marginRight:5,
    },
    buttonContainer: {
        marginLeft: 20,
        flexDirection:'row',
    },
    container:{
        backgroundColor:'blue'
    },
    navBar: {
        width: '100%',
        height: 70,
        backgroundColor: 'white',
        borderColor: '#7766C6',
        flexDirection:'row',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    navBarItem: {
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    navBarText:{
        color: '#7766C6',
        fontWeight: 'bold',
    },
    testtext: {
        color:'black',
        fontSize:42,
    },
    scrollView: {
        top: 0,
    },
    card:{
        flexDirection:'column',
        height:330,
        elevation: 5, // Add elevation for drop shadow effect
        shadowColor: '#000', // Specify shadow color (optional)
        shadowOffset: { width: 0, height: 2 }, // Specify shadow offset (optional)
        shadowOpacity: 0.25, // Specify shadow opacity (optional)
        shadowRadius: 3, // Specify shadow radius (optional)
    },
    header:{
        top:15,
        marginLeft:20,
    },
    headerText:{
        fontWeight:'bold',
        fontSize:30,
    },
    cardText:{
        position:'absolute',
        fontWeight:'bold',
        fontSize:25,
        left:40,
        top:-20
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

export default WelcomeScreen;