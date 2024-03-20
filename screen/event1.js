import React, { useRef } from 'react';
import { useState } from 'react';
import { View, ImageBackground, StyleSheet, Image, Text, Pressable, PanResponder, Animated } from 'react-native';

function Event1({ navigation }) {
    const bg = require("../assets/princess.png")
    const mainbg = require("../assets/blossombg.jpg")
    const eventDesc = require("../assets/eventDesc.png")
    const back = require("../assets/backIcon.png")
    const locationIcon = require("../assets/location.png")
    const timeIcon = require("../assets/time.png")
    const calendarIcon = require("../assets/calendar.png")

    const join = require("../assets/joinButton.png")
    const joined = require("../assets/joinedButton.png")
    const invite = require("../assets/inviteButton.png")
    const fav = require("../assets/favButton.png")

    const pan = useRef(new Animated.ValueXY()).current;

    const [joinButton, setActiveButton] = useState('Join');

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (evt, gestureState) => {
            const { dy } = gestureState;
            const maxHeight = 200; // Maximum height to pull up
            if (dy < 0 && dy >= -maxHeight) {
                Animated.event([null, { dy: pan.y }], { useNativeDriver: false })(evt, gestureState);
            }
        },
        onPanResponderRelease: (e, gestureState) => {
            // Animate the pan back to default position
            Animated.spring(pan, {
                toValue: { x: 0, y: 0 },
                useNativeDriver: false
            }).start();
        }
    });

    return (
        <ImageBackground
            style={styles.mainBackground}
            source={mainbg}>
            <ImageBackground
                style={styles.background}
                source={bg}>
                <Pressable onPress={() => [navigation.navigate('Welcome'), console.log("tapped")]}>
                    <Image style={styles.logo} source={back} />
                </Pressable>

                <Animated.View
                    style={[styles.descBox, { transform: [{ translateY: pan.y }] }]}
                    {...panResponder.panHandlers}>
                    <View style={{ paddingHorizontal: 20, top: 10 }}>
                        <Text style={styles.headerText}>Prince Euthalia's falling in love with me?!</Text>
                        <View style={styles.sub}>
                            <Image style={styles.logoText} source={calendarIcon} />
                            <Text style={styles.subText}>06/04/2024</Text>
                            <View style={{ left: 10, flexDirection: 'row' }}>
                                <Image style={styles.logoText} source={timeIcon} />
                                <Text style={styles.subText}>10:00-17:30</Text>
                            </View>
                        </View>
                        <View style={styles.sub}>
                            <Image style={styles.logoText} source={locationIcon} />
                            <Text style={styles.subText}>TOASTO cafe & bakery</Text>
                        </View>
                        <View style={styles.desc}>
                            <Text style={styles.descHeader}>Description</Text>
                            <Text>รายละเอียดเกี่ยวกับการจองที่นั่งและ Special Set Menu{"\n"}
                                1. งานเลี้ยงน้ำชาเปิดจะเปิดให้แขกผู้มีเกียรติทุกท่านทั้งหมดจำนวน 5 รอบ รอบละ 20 ที่นั่ง และที่นั่งสำรองอีก 5 ที่นั่ง{"\n"}
                                2. สำหรับ Special Set Menu ประกอบไปด้วยเมนูชุดน้ำชา และของที่ระลึกสุดพิเศษ โดยเมนูพิเศษจะแบ่งเป็น 2 ชุด ในแต่ละชุดจะประกอบไปด้วยชุดชาร้อน (ชาเอิร์ลเกรย์หรือชาคาโมมายล์) ทานคู่กับขนมหวาน (สตรอว์เบอร์รี่ชอตเค้กหรือโทสต์สตรอว์เบอร์รี่){"\n"}
                                3. Special Set Menu จะมีเพียง 80 ชุดเท่านั้น{"\n"}
                                4. หากไม่สะดวกมาตามรอบเวลาที่จองไว้ สามารถทักทางแฟนเพจเพื่อขอเปลี่ยนเวลาจองได้ หรือเลือกสละสิทธิ์ให้กับผู้อื่นได้
                            </Text>
                            
                        </View>
                    </View>
                </Animated.View>
                <Pressable style={styles.joinButton} onPress={() => setActiveButton('Joined')}>
                <Image source={joinButton === 'Join' ? join : joined} />
                </Pressable>

            </ImageBackground>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    descBox: {
        position:'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingVertical: 20,
        flexGrow: 1, 

    },
    mainBackground: {
        flex: 1,
    },
    logo: {
        width: 40,
        height: 40,
        top: 40,
        position: 'absolute',
        left: 20,
    },
    logoText: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    subText: {
        fontSize: 15,
    },
    sub: {
        flexDirection: 'row',
        width: 'auto',
        top: 5,
    },
    desc: {
        top: 10,
    },
    descHeader: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    joinButton: {
        position: 'absolute', 
        bottom: 25, 
        alignSelf: 'center',
        padding: 10, 
        borderRadius: 10,
    },
    joinButtonText: {
        color: 'white', 
        fontSize: 18, 
    }

});

export default Event1;
