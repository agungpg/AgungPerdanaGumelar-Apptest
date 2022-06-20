import React, { useState, useMemo } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import HomeScreenStyle from '../HomeScreen.style';
import { DefaultAvatar } from '../../../components';
import { URLExp } from '../../../constants';


export const ContactCard = React.memo(({data, navigation}) => {
    //variable region
    const {firstName, lastName, age, photo, id} = data.item;
    const [isLoadImgFailed, setLoadImgFailed] = useState(false);
  
    //method region
    const handleItemPress = (id) => {
       navigation.navigate("DETAIL", {id});
     };
    const InitialName = useMemo(() => {
      const initFirstName = firstName?.length > 0 ? firstName.charAt(0) : "";
      const initLasttName = lastName?.length > 0 ? lastName.charAt(0) : "";
      return initFirstName+initLasttName;
    },[]);
    
    const onImgErrorToLoad = () => {
      console.log("onImgErrorToLoad is running")
      setLoadImgFailed(true)
    }
  
    //render region
    return (<TouchableOpacity testID="contactCard" onPress={() => handleItemPress(id)} style={HomeScreenStyle.contactCard}>
      {
        (!isLoadImgFailed && URLExp?.test(photo)) ? 
        <Image style={HomeScreenStyle.contactImg} onError={() => onImgErrorToLoad()} source={{url: photo}}/> :
        <DefaultAvatar name={InitialName} />
      }
      <View  style={HomeScreenStyle.contactInfo}>
        <Text style={HomeScreenStyle.contactTextInfo}>{firstName} {lastName}</Text>
        <Text style={HomeScreenStyle.contactTextInfo}>{age}</Text>
      </View>
    </TouchableOpacity>)
   })