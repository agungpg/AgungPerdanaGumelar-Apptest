export const deleteAlertProp = {
    show: false,
    showProgress: false,
    title: "Delete Contact",
    message: "Are you sure want to delete this contact?",
    closeOnTouchOutside: false,
    closeOnHardwareBackPress: false,
    showCancelButton: true,
    showConfirmButton: true,
    cancelText: "No, cancel",
    confirmText: "Yes, delete it",
    confirmButtonColor: "#DD6B55",
 }
 export const errorDeleteAlertProp = {
    show: false,
    showProgress: false,
    title: "Failed!",
    message: "Delete contact failed!",
    closeOnTouchOutside: false,
    closeOnHardwareBackPress: false,
    showCancelButton: false,
    showConfirmButton: true,
    confirmText: "OK",
    confirmButtonColor: "#0069D9",
 }
 export const successDeleteAlertProp = {
    show: false,
    showProgress: false,
    title: "Success!",
    message: "Delete contact succeed!",
    closeOnTouchOutside: false,
    closeOnHardwareBackPress: false,
    showCancelButton: false,
    showConfirmButton: true,
    confirmText: "OK",
    confirmButtonColor: "#0069D9",
 }
 export var mockProps = {
   route: {params: {id:"123"}},
   data: {},
   loading: false,
   navigation: {navigate: () => {}},
   retrieveDetailContact: () => {},
   resetDetailContact: () => {},
}

export  var mockData = {
       id: "123",
       firstName: "Agung",
       lastName: "Perdana",
       age: "26",
       photo: "https://placeimg.com/640/480/people"
}

export var mockCustomButtonProps = { 
   onPress: () => {}, 
   buttonStyle: {}, 
   textStyle: {}, 
   text: "", 
   testID:"deleteContactButton"
}