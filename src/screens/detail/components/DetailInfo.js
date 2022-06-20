import React from 'react';
import {
    View,
    Text,
} from 'react-native'
import DetailScreenStyle from '../DetailScreen.style';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

export const DetailInfo = ({firstName, lastName, age}) => (
    <View testID="contactInfo" style={DetailScreenStyle.detailInfoWrapper}>
        <Text style={DetailScreenStyle.contactName}>{firstName+" "+ lastName}</Text>
        <Text style={DetailScreenStyle.contactAge}>{age+" years old"}</Text>
    </View>
)
export const DetailInfoSkelaton = () => (
    <View style={DetailScreenStyle.detailInfoWrapper}>
      <SkeletonPlaceholder.Item 
        speed={800} 
        highlightColor={"#F2F8FC"} 
        backgroundColor={"#E1E9EE"} 
        width={300}
        height={35}
        borderRadius={50}
        marginTop={15}
      />
      <SkeletonPlaceholder.Item 
        speed={800} 
        highlightColor={"#F2F8FC"} 
        backgroundColor={"#E1E9EE"} 
        width={240}
        height={25}
        borderRadius={20}
        marginTop={10}
      />
    </View>
)