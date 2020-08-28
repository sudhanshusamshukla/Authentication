import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button } from './component/common';
import LoginForm from './component/LoginForm';

class App extends Component {
    componentDidMount() {
        firebase.initializeApp({
                apiKey: 'AIzaSyCaZXrgIFXveNNH9u14Ok5r5Qcm8Swlq2o',
                authDomain: 'authentication-e0e48.firebaseapp.com',
                databaseURL: 'https://authentication-e0e48.firebaseio.com',
                projectId: 'authentication-e0e48',
                storageBucket: 'authentication-e0e48.appspot.com',
                messagingSenderId: '711296377308',
                appId: '1:711296377308:web:8db7e71c5ba9dbc75f2f19',
                measurementId: 'G-86VV69DQ59'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View >
        );
    }
}


export default App;
