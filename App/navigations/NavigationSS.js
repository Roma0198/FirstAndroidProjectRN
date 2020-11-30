import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {StartScreen} from '../containers/StartScreen';
import FilmsDateScreen from '../containers/FilmsDateScreen';

const Stack = createStackNavigator();

export const NavigationSS = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="StartScreen" component={StartScreen} />
                <Stack.Screen name="FilmDateScreen" component={FilmsDateScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
