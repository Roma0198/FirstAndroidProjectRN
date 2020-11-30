/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import { Provider } from 'react-redux'

import {NavigationSS} from './navigations/NavigationSS';
import {createStore} from 'redux';
import store from './redux/store';


export default function App() {
    return (
        <Provider store={store}>
        <NavigationSS/>
        </Provider>

    );
}

const styles = StyleSheet.create({
    myfirsttest: {
        height:'100%',
        width: '100%'
    }
});

