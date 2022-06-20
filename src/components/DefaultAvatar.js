import React from 'react';
import {
   Text,
   View,
   StyleSheet
} from 'react-native';

const Styles = StyleSheet.create({
    card: {
        height: 60,
        width: 60,
        borderRadius: 60,
        backgroundColor: '#3783FB', 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    text: { 
        fontSize: 20, 
        fontWeight: "400", 
        color: "#fff"
    }
})

export const DefaultAvatar = ({name, cardStyle, textStyle}) =>(
    <View style={!!cardStyle ? cardStyle : Styles.card}>
        <Text style={!!textStyle ? textStyle : Styles.text}>{name}</Text>
    </View>
);