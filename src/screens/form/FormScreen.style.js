import React from 'react';
 import {
   StyleSheet,
 } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      width: '100%',
      height: '100%',
      flex: 1,
    },
    formBody: {
      backgroundColor: '#fff',
      flex: 1,
      paddingHorizontal: 15,
    },
    customInputTitle:{ 
      fontSize: 16, 
      fontWeight: '600' 
    },
    errorText:{ 
      fontSize: 14, 
      color: "red",
      marginTop: 5
    },
    customInputBody: { 
      height: 35, 
      width: 200, 
      borderColor: 'grey', 
      borderWidth: 1, 
      borderRadius: 5, 
      marginTop: 5,
      padding: 5
    },
    actionButtonWrapper: {
      height: 60,
      alignItems: 'center',
      flexDirection: 'column',
      width: '100%',
      marginTop: 20
    },
    buttonSubmit: {
      height: 50,
      width: '80%',
      backgroundColor: '#3783FB', 
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      borderRadius: 10
    },
    buttonText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: '600'
    }
  });