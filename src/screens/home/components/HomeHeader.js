import React from 'react';
 import {
   Text,
   View,
   TextInput
 } from 'react-native';
import HomeScreenStyle from '../HomeScreen.style';
import { SearchIcon } from '../../../assets/icons';

export const HomeHeader = React.memo(({onSearchTextChange, searchKeyword}) => 
(<View style={HomeScreenStyle.homeScreenHeader}>
    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 36}}>Contact Manager</Text>
    </View>
    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, marginTop: 15, height: 40, borderColor: "#9B9B9B", borderWidth: 1, borderRadius: 5}}>
      <SearchIcon color={"#9B9B9B"} width={50} height={30} />
      <TextInput testID="searchTextInput" placeholder='Search...' value={searchKeyword} onChangeText={(text) => onSearchTextChange(text)} style={{   width: '100%', height: 40 }}/>
    </View>
  </View>)
)