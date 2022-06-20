import React from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

const DefaultStyles = StyleSheet.create({
    container: {
        height: 60,
        width: '100%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10 
    },
    title: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: '600',
        
    }
})

export const HeaderBar = ({
    style,
    HeaderLeft,
    HeaderRight,
    title,
    titleColor
}) => {
    return <View style={!!style ? style : DefaultStyles.container}>
        {!!HeaderLeft ? 
            <HeaderLeft /> : null}
        <Text style={[DefaultStyles.title, !!titleColor ? { color: titleColor} : {}]}>{title ? title : ""}</Text>
        {!!HeaderRight ? 
            <HeaderRight /> : null}

    </View>
}
