//import lib region
import React, { useCallback, useEffect, useState, useMemo } from 'react';
 import {
   SafeAreaView,
   View,
   Image,
   TouchableOpacity,
 } from 'react-native';
import { connect } from "react-redux";
import AwesomeAlert from 'react-native-awesome-alerts';

 //import cutom component region
import { DefaultAvatar } from '../../components';
import { HeaderBar } from '../../components';
import { DetailInfo, CustomButton, DetailInfoSkelaton, DetailScreenSkelaton } from './components';

 //import assets region
import {  BackArrowIcon } from '../../assets/icons';

//import constants region
import DetailScreenStyle from './DetailScreen.style';
import { deleteAlertProp, errorDeleteAlertProp, successDeleteAlertProp } from './DetailScreen.constant';
import { URLExp } from '../../constants';

//import utils region 
import { retrieveContact, resetDetail, retrieveContacts } from "../../stores/ContactSlice";
import ContactService from "../../services/ContactService";

 
//Main component region
 const DetailScreen = ({ 
    route, 
    data, 
    loading, 
    retrieveDetailContact, 
    resetDetailContact, 
    navigation, 
    retrieveContactList 
  }) => {
  //variable region
  const { id } = route.params;
  const [isLoadImgFailed, setLoadImgFailed] = useState(false);
  const [popupType, setPopupType] = useState("DELETE");
  const [alertProp, setAlertProp] = useState(deleteAlertProp);
 

   //method region
   const initFetch = useCallback(() => {
    retrieveDetailContact(id);
  }, [])
  
  useEffect(() => {
    initFetch()
  }, [])

  const InitialName = useMemo(() => {
    const initFirstName = data?.firstName?.length > 0 ? data?.firstName.charAt(0) : "";
    const initLasttName = data?.lastName?.length > 0 ? data?.lastName.charAt(0) : "";
    return initFirstName+initLasttName;
  },[data]);

  const showPopUpDelete = () => {
    setPopupType("DELETE");
    setAlertProp({
      ...deleteAlertProp,
      show: true
    })
  }

  const onPressCancel = () => {
    setAlertProp({
      ...deleteAlertProp,
      show: false
    })
  }

   const onPressConfirm = () => {
      if(popupType == "DELETE") onDeleteConfirmed();
      else if(popupType == "DELETEERROR") {
        setAlertProp({show: false});
      } else if(popupType == "DELETESUCCESS") {
        setAlertProp({show: false});
        retrieveContactList();
        navigation.goBack();
      }
   };
 
   const onDeleteConfirmed = async () => {
    try {
      const processDelete = await ContactService.remove(id);
      if(processDelete.status >= 200 && processDelete.status < 300) {
        setAlertProp({
          show: false
        })
        setPopupType("DELETESUCCESS");
        setAlertProp({
          ...successDeleteAlertProp,
          show: true
        })
      }
    } catch (error) {
      setAlertProp({
        show: false
      })
      setPopupType("DELETEERROR");
      setAlertProp({
        ...errorDeleteAlertProp,
        show: true
      })
    }
   };

   const onGoBack = () => {
      resetDetailContact();
      retrieveContactList();
      navigation.goBack();
   }
   

   //render region
   if(!!loading) {
    return <DetailScreenSkelaton onGoBack={onGoBack} />
   }

   return(<SafeAreaView style={DetailScreenStyle.container}>
        <HeaderBar
        style={DetailScreenStyle.headerBar} 
        HeaderLeft={() => 
          <TouchableOpacity onPress={onGoBack}>
              <BackArrowIcon height={30} width={30} color={"#fff"} />
          </TouchableOpacity>} 
        />
      <View style={DetailScreenStyle.header} />
      <View style={DetailScreenStyle.body}>
        {
          
        (!isLoadImgFailed && URLExp?.test(photo))  ? 
          <Image testID="avatar" onError={() => setLoadImgFailed(true)} resizeMode="cover" source={{url: data.photo }}  style={DetailScreenStyle.avatar} /> :
          <DefaultAvatar testID="defaultAvatar" cardStyle={DetailScreenStyle.defaultAvatar} textStyle={DetailScreenStyle.textDefaultAvatar} name={InitialName} />
        }
        <DetailInfo firstName={data.firstName} lastName={data.lastName} age={data.age} />
      </View>
      <View style={DetailScreenStyle.footer}>
        <CustomButton 
          testID={"updateContactButton"}
          text={"EDIT"} 
          textStyle={DetailScreenStyle.textButton} 
          buttonStyle={DetailScreenStyle.editButton} 
          onPress={() => navigation.navigate("FORM", {formType: "update"})} 
        />
        <CustomButton 
          testID={"deleteContactButton"}
          text={"DELETE"} 
          textStyle={DetailScreenStyle.textButton} 
          buttonStyle={DetailScreenStyle.deleteButton} 
          onPress={showPopUpDelete} 
        />
      </View>
      <AwesomeAlert
        {...alertProp}
        onCancelPressed={onPressCancel}
        onConfirmPressed={onPressConfirm}
      />
   </SafeAreaView>)
 };

function mapDispatchToProps(dispatch) {
  return {
    retrieveDetailContact: (id) => dispatch(retrieveContact(id)),
    resetDetailContact: () => dispatch(resetDetail()),
    retrieveContactList: () => dispatch(retrieveContacts()),
  }
}

function mapStateToProps(state){
  return {
    data: state.contacts.detail.data,
    loading: state.contacts.detail.loading,
  }
}
export const DetailScreenComp = DetailScreen;
export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
 