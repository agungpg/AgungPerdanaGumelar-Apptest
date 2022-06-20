import React from 'react';
import {Svg, Path, G} from 'react-native-svg';
export const BackArrowIcon = (props) => (
    <Svg style={props?.style ? props.style : {}} width={props?.width || 24} height={props?.height || 24} fill={props?.color || "#000"} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <G data-name="Layer 57" id="Layer_57">
        <Path d="M26,14H10l5.17-6.79A2,2,0,0,0,12,4.79l-7.62,10a2,2,0,0,0,0,2.42l7.62,10a2,2,0,0,0,3.18-2.42L10,18H26a2,2,0,0,0,0-4Z"/>
    </G>
    </Svg>
);
