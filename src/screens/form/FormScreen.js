// third party region
import React, { useCallback, useEffect, useState } from 'react';
 import {
   SafeAreaView,
   StatusBar,
   Text,
   View,
   useColorScheme,
   TouchableOpacity,
 } from 'react-native';
import { connect } from "react-redux";
 import AwesomeAlert from 'react-native-awesome-alerts';

 //import custom component region
 import {FormBody} from './components';
 import { HeaderBar } from '../../components';

 //import assets region
 import { BackArrowIcon } from '../../assets/icons'

//import constants region
 import {
  defaultAlertProp,
  defaultPayload,
  defaultErrors
 } from './FormScreen.constant';
 import FormScreenStyle from './FormScreen.style';
 import { NumberExp, URLExp } from '../../constants';

//import utils region 
import { retrieveContacts, retrieveContact, createContact, updateContact, resetForm } from "../../stores/ContactSlice";

//Main component region
const FormScreen = ({ 
  route, 
  data, 
  navigation, 
  form, 
  dipatchCreateContact,
  retrieveDetailContact, 
  retrieveContactList,  
  dipatchUpdateContact,
  dispatchResetForm,
}) => {
    //variable region
  const { formType } = route.params;
  const isDarkMode = useColorScheme() === 'dark';
  const [alreadyInit, setAlreadyInit] = useState(false);
  const [payload, setPayload] = useState({defaultPayload})
  const [errors, setErrors] = useState(defaultErrors);
  const [alertProp, setAlertProp] = useState(defaultAlertProp);
 

   //method region
   useEffect(() => {
     if(formType=="update" && !alreadyInit) {
        setPayload(data);
        setAlreadyInit(true);
     }
     if(!!form.hasSubmit && form.statusCode == 201) {
        setAlertProp({
          show: true,
          title: "Succeed",
          message: `Contact ${formType == "create" ? "create" : "update"} successfully!`
        })
     }
     if(!!form.hasSubmit && (form.statusCode <200 || form.statusCode > 299)) {
        setAlertProp({
          show: true,
          title: "Failed",
          message: form.message || `Contact failed to ${formType == "create" ? "create" : "update"}!`
        })
     }
   }, [form])
   
   const onChangeForm = useCallback((value, name) => {
      delete errors[name];
      setErrors(errors);
      setPayload({
        ...payload,
        [name]: value
      })
   });
   
   const onSubmit = async () => {
    try {
      const { firstName, lastName, age, photo, id } = payload;
      let errors =  {};;
      
      if(!firstName) errors["firstName"] = "*First name should be fill!";
      if(!age) errors["age"] = "*Age should be fill!";
      if(!lastName) errors["lastName"] = "*Last name should be fill!";
      if(!photo) errors["photo"] = "*Photo should be fill!";

      if(!NumberExp.test(age)) errors["age"] = "*Age should be numeric!";
      if(!URLExp.test(photo)) errors["photo"] = "*Photo should be url!";

      if(Object.keys(errors).length > 0) {
        setErrors({
          ...defaultErrors,
          ...errors});
        return;
      }
      if(!!id && formType == "update"){
        dipatchUpdateContact({ firstName, lastName, age, photo, id })
      } else {
        dipatchCreateContact({ firstName, lastName, age, photo })
      }
    } catch (error) {
      let errMsg = error?.response?.data?.message || `Contact failed to ${formType == "create" ? "create" : "update"}!`;
      setAlertProp({
        show: true,
        title: "Failed",
        message: errMsg
      })
    }
   }

   onConfirmPressed= async () =>{ 
    if(alertProp.title == "Succeed") {
      if(formType == "create") retrieveContactList();
      if(formType == "update") retrieveDetailContact(data.id);
      navigation.goBack();
    }
    setAlertProp(defaultAlertProp);
    setTimeout(() => dispatchResetForm(), 200)
   }


   //render region
   return (
     <SafeAreaView style={FormScreenStyle.container}>
        <StatusBar backgroundColor={'#fff'} barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <HeaderBar 
          title={formType == "create" ? "Create Contact" : "Update Contact"} 
          HeaderLeft={() => 
            <TouchableOpacity onPress={navigation.goBack}>
                <BackArrowIcon height={30} width={30} />
            </TouchableOpacity>} 
          />
            <FormBody onChange={onChangeForm} data={payload} errors={errors} />
            <View style={FormScreenStyle.actionButtonWrapper}>
              <TouchableOpacity testID="submitButton" onPress={onSubmit} style={FormScreenStyle.buttonSubmit}>
                <Text style={FormScreenStyle.buttonText}>SUBMIT</Text>
              </TouchableOpacity>
            </View>
          <AwesomeAlert
            {...alertProp}
            closeOnTouchOutside={false}
            closeOnHardwareBackPress={false}
            showCancelButton={false}
            showConfirmButton={true}
            confirmText={"OK"}
            onConfirmPressed={onConfirmPressed}
          />
     </SafeAreaView>
   );
 };
 
function mapDispatchToProps(dispatch) {
  return {
    retrieveDetailContact: (id) => dispatch(retrieveContact(id)),
    retrieveContactList: () => dispatch(retrieveContacts()),
    dipatchCreateContact: (data) => dispatch(createContact(data)),
    dipatchUpdateContact: (data) => dispatch(updateContact(data)),
    dispatchResetForm: () => dispatch(resetForm()),
  }
}

function mapStateToProps(state){
  return {
    data: state.contacts.detail.data,
    form: state.contacts.form,
  }
}
export const FormScreenComp = FormScreen;
export default connect(mapStateToProps, mapDispatchToProps)(FormScreen);
 