import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    ImageBackground,
    TouchableOpacity,
    BackHandler
} from 'react-native';
import images from '../../themes/images';



export const Header = (props) => {

    const goBackHandler = () => {
        props.navigation.goBack();
    };



    return (
        <View style={styles.HeadSSView}>
            <ImageBackground resizeMode="stretch" source={images.headBackground} style={styles.HeadBackground}>
                {   props.backButton && (
                <TouchableOpacity  onPress={goBackHandler} style={styles.backButton} >
                <Image resizeMode="contain" source={images.backButton} style={styles.backButtonIMG}  />
                </TouchableOpacity>
                )}
                <Text style={styles.HeadSSText}> Super Films </Text>
            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create ({
    HeadSSView: {
      width: '100%',
        height: 75,
        },
    HeadSSText: {
        color: 'black',
        fontSize: 32,
        fontFamily: 'SansitaSwashed-Regular',
        width: '100%',
        zIndex: 1,
        textAlign: 'center',
        position: 'absolute',
    },
    HeadBackground: {
        width: '100%',
        height: 75,
        alignItems: 'center',
        flexDirection: 'row',
        },
    backButton: {
        width: '13%',
        height: '100%',
        justifyContent: 'center',
        marginLeft: '2%',
        paddingTop: 5,
        paddingLeft: 5,
        zIndex: 2,
        flexDirection: 'row',
        },
     backButtonIMG: {
         width: '100%',
         height: '100%',
         justifyContent: 'flex-start',


    },

})
