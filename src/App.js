import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button } from './component/common';
import LoginForm from './component/LoginForm';

class App extends Component {
    componentDidMount() {
        firebase.initializeApp({
                
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
