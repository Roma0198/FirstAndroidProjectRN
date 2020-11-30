import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    ImageBackground
} from 'react-native';
import images from '../../themes/images';

export const ContentSS = (props) => {

    return (
        <View style={styles.contentssviev}>
            <View style={styles.contentssvievtv}>
            <Image resizeMode="contain" source={images.tvChanel}  style={styles.tvChanel} />
            </View>
            <View style={styles.textContentSSViev}>
                <Text style={styles.textContentSS}>Для получения списка сериалов, пожалуйста, выберите необходимый месяц и день.
                </Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    contentssviev: {
        width: '100%',
        height: 280,
        paddingTop: 20,

    },
    contentssvievtv: {
        width: '100%',
        height: 150,
        alignItems: 'center',

    },
    tvChanel: {
        width: 180,
        height: 130,
    },
    textContentSSViev:{
        width: '100%',
            },
    textContentSS: {
        fontSize: 20,
        fontFamily: 'Roboto-Regular',
        textAlign: 'center',

    }


})
