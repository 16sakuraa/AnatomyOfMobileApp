import  { View, ImageBackground, StyleSheet, Image,Text ,Button} from 'react-native';



function MainPage(props) {
    const bg = require("../assets/blossombg.jpg")
    return (
    <ImageBackground
        styles={styles.background}
        source={bg}  
    >
        <Button title="Button" onPress={()=> console.log('button tapped')}/>
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