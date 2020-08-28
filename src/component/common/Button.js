import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity style={buttonStyle}
            onPress={onPress} >
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity >
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#007aff',
        //color: '#2196F3',
        backgroundColor: '#2196F3',
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 2
    },
    textStyle: {
        alignSelf: 'center',
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    }
};

export { Button };