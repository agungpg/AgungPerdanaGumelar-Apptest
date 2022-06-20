import React from 'react';
import {
    TouchableOpacity,
    Text,
} from 'react-native'
import DetailScreenStyle from '../DetailScreen.style';


export const CustomButton = ({ onPress, buttonStyle, textStyle, text, testID=""}) => (
    <TouchableOpacity testID={testID} style={!!buttonStyle ? buttonStyle : DetailScreenStyle.deleteButton} onPress={onPress}>
      <Text style={!!textStyle? textStyle : DetailScreenStyle.textButton}>{text || 'text'}</Text>
    </TouchableOpacity>
)