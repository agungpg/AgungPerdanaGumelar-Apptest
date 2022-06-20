//import lib region
import React from 'react';
 import {
   SafeAreaView,
   View,
   TouchableOpacity,
 } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

 //import cutom component region
import { HeaderBar } from '../../../components';
import {  DetailInfoSkelaton } from './DetailInfo';

 //import assets region
import {  BackArrowIcon } from '../../../assets/icons';

//import constants region
import DetailScreenStyle from '../DetailScreen.style';

 
//Main component region
export const DetailScreenSkelaton = ({onGoBack}) => {

   return(<SafeAreaView style={DetailScreenStyle.container}>
            <HeaderBar
            style={[DetailScreenStyle.headerBar, {backgroundColor: "#c9d1d6"}]} 
            HeaderLeft={() => 
            <TouchableOpacity onPress={onGoBack}>
                <BackArrowIcon height={30} width={30} color={"#fff"} />
            </TouchableOpacity>} 
            />
            <View style={[DetailScreenStyle.header,{ backgroundColor: '#c9d1d6'}]} />
            <View style={DetailScreenStyle.body}>
                <SkeletonPlaceholder.Item 
                    speed={800} 
                    highlightColor={"#F2F8FC"} 
                    backgroundColor={"#E1E9EE"} 
                    width={240}
                    height={240}
                    borderRadius={240}
                    marginTop={-120}
                />
                <DetailInfoSkelaton />
            </View>
            <View style={DetailScreenStyle.footer}>
                <SkeletonPlaceholder.Item 
                speed={800} 
                highlightColor={"#F2F8FC"} 
                backgroundColor={"#E1E9EE"} 
                width={'80%'}
                height={50}
                borderRadius={10}
                marginTop={10}
                marginBottom={5}
                />
                <SkeletonPlaceholder.Item 
                speed={800} 
                highlightColor={"#F2F8FC"} 
                backgroundColor={"#E1E9EE"} 
                width={'80%'}
                height={50}
                borderRadius={10}
                marginTop={5}
                marginBottom={10}
                />
            </View>
        </SafeAreaView>)
}