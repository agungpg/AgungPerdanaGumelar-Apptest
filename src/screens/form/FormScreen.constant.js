
export const defaultErrors = {
        firstName: null,
        lastName: null,
        age: null,
        photo: null
}
export const defaultPayload = {
    id: null,
    firstName: "",
    lastName: "",
    age: null,
    photo: "",
} 
export const defaultAlertProp = {
    show: false,
    title: "",
    message: ""
}

export const mockFormProps = { 
    data: {}, 
    route: {params: {formType: ""}}, 
    form: {
      loading: false,
      status: null,
      hasSubmit: false,
      statusCode: null,
      message: "",
    },
    navigation: {navigate: () => {}},
    dipatchCreateContact: () => {},
    dipatchUpdateContact: () => {},
    retrieveDetailContact: () => {}, 
    retrieveContactList: () => {}, 
}