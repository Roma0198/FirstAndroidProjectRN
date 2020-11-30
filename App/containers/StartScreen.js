import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';



import {Header} from '../components/Header';
import {ContentSS} from '../components/ContentSS';
import {Kalendar} from '../components/CalendarSS';



export const StartScreen = (props) => {
    return (
        <View style={styles.StartScreenStyle} >
            <Header/>
            <ContentSS/>
            <Kalendar navigation={props.navigation}/>
        </View>


        )
}
const styles = StyleSheet.create ({
    StartScreenStyle: {
        backgroundColor: '#FFFF',
        height: '100%',
        width: '100%',
    },
    StartScreenStyleText: {

    }
})

