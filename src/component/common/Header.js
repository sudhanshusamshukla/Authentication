import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {

    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );

};

const styles = {
    textStyle: {
        fontSize: 30,
    },
    viewStyle: {
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        paddingTop: 15,
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        //borderWidth: 1,
        borderRadius: 2,
        elevation: 2,
        position: 'relative',
    },
};

export { Header };