import  { View, ImageBackground, StyleSheet, Image,Text } from 'react-native';

function WelcomeScreen(props) {
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
            </View>
            <View style={styles.registerButton}>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems:'center',

    },
    loginButton:{
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65'
    },
    registerButton:{
        width: '100%',
        height: 70,
        backgroundColor: '#4ECDC4'
    },
    logo:{
        width: 100,
        height: 100,

    },
    logoContainer:{
        position: 'absolute',
        top: 70,
        alignItems:'center',
    }
});

export default WelcomeScreen;