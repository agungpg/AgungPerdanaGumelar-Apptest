import React from 'react';
 import {
   StyleSheet,
   Dimensions,
 } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
 import Constant from '../../constants/index';
 const windowWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('screen').height;
const { COLORS } = Constant;

export default StyleSheet.create({
  container: { 
      height: '100%', 
      backgroundColor: '#fff'
    },
    headerBar: {
      height: 60,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      backgroundColor: "#022864"
    },
    header: {
      height: Dimensions.get("screen").height * 0.2,
      backgroundColor: "#022864",
    },
    body: { 
      width: '100%', 
      flexDirection: 'column', 
      alignItems: 'center', 
      flex: 1, 
      backgroundColor: '#fff'
    },
    avatar: {
      height: 240,
      width: 240,
      borderRadius: 240,  
      marginTop: -120,
    },
    defaultAvatar: {
      height: 240,
      width: 240,
      borderRadius: 240,
      backgroundColor: '#3783FB', 
      flexDirection: 'row', 
      justifyContent: 'center', 
      alignItems: 'center',
      marginTop: -120,
    },
    textDefaultAvatar: {
      fontSize: 80, 
      fontWeight: "400", 
      color: "#fff"
    },
    detailInfoWrapper: {
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
    },
    contactName: { 
      fontSize: 40, 
      fontWeight: "400", 
      marginTop: 10
    },
    contactAge: { 
      fontSize: 25, 
      fontWeight: "400"
    },
    footer: {
      height: 130,
      backgroundColor: '#fff',
      width: '100%',
      flexDirection: 'column', 
      alignItems: 'center',
    },
    editButton: {
      backgroundColor: '#3783FB', 
      width: '80%',
      borderRadius: 10,
      height: 50,
      flexDirection: 'row', 
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      marginBottom: 5,
    },
    deleteButton: {
      backgroundColor: '#C92332', 
      width: '80%',
      borderRadius: 10,
      height: 50,
      flexDirection: 'row', 
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 5,
      marginBottom: 10,
    },
    textButton: {
      color: "#fff",
      fontSize: 20,
      fontWeight: "600"
    }
  });