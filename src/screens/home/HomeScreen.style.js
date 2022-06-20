import React from 'react';
 import {
   StyleSheet,
   Dimensions,
 } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    homeScreenContainer: {
      backgroundColor: "#fff",
      width: '100%',
      height: '100%',
      paddingHorizontal: 15
    },
    homeScreenHeader: {
      padding: 15,
      height: 120,
      backgroundColor: '#fff',
    },
    contactContainer: {
      backgroundColor: "#fff",
      height: windowHeight - 115,

    },
    contactCard: {
      paddingHorizontal: 10,
      paddingVertical: 15,
      width: '100%',
      borderBottomColor: '#e9e9e9',
      borderBottomWidth: 1,
      flexDirection: 'row',
      alignItems: "center"
    },
    contactImg: {
      height: 60,
      width: 60,
      borderRadius: 60
    },
    contactInfo: {
      marginLeft: 10,
      marginTop: -15
    },
    contactTextInfo: {
      fontSize: 16,
      fontWeight: '600',
      color: '#000'
    },
    floatButtonAdd: { 
      height: 50, 
      width: 50, 
      borderRadius: 50, 
      backgroundColor: '#3783FB', 
      position: "absolute", 
      bottom: 30, 
      right: 30, 
      zIndex: 99, 
      flexDirection: "row", 
      alignItems: "center", 
      justifyContent: "center"
    }
  });