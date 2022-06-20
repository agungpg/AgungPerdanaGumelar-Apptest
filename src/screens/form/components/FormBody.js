// third party region
import React from 'react';
 import {
  ScrollView,
 } from 'react-native';
import FormScreenStyle from '../FormScreen.style';
import {CustomInput} from './CustomInput';


export const FormBody = React.memo(({data, onChange, errors}) => {
    return(<ScrollView style={FormScreenStyle.formBody}>
      <CustomInput testID="inputPhoto" error={errors["photo"] || undefined} value={data.photo} onChange={(e) => onChange(e, "photo")}  title={"Link Photo"} inputStyle={{ width: '90%'}} />
      <CustomInput testID="inputFirstName" error={errors["firstName"] || undefined} value={data.firstName} onChange={(e) => onChange(e, "firstName")} title={"First Name"} inputStyle={{ width:'70%'}} />
      <CustomInput testID="inputLastName" error={errors["lastName"] || undefined} value={data.lastName} onChange={(e) => onChange(e, "lastName")} title={"Last Name"} inputStyle={{ width: '70%'}} />
      <CustomInput testID="inputAge" error={errors["age"] || undefined} value={!!data.age ? data.age+"" : ""} onChange={(e) => onChange(e, "age")} title={"Age"} keyboardType={"numeric"} inputStyle={{ width: '30%'}} />
    </ScrollView>)
  });