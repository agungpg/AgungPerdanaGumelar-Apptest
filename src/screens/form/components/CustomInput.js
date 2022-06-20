// third party region
import React from 'react';
 import {
   Text,
   View,
   TextInput,
 } from 'react-native';
import FormScreenStyle from '../FormScreen.style';

export const CustomInput = React.memo(({
    onChange,
    title,
    inputStyle,
    keyboardType,
    value,
    error,
    testID=""
}) => (
    <View style={{ padding: 10 }}>
        <Text style={FormScreenStyle.customInputTitle}>{title || ""}</Text>
        <TextInput testID={testID}  value={value}  keyboardType={keyboardType || 'default'} onChangeText={onChange} style={[FormScreenStyle.customInputBody, inputStyle]} />
        {!!error && <Text style={FormScreenStyle.errorText}>{error}</Text>}
    </View>
))