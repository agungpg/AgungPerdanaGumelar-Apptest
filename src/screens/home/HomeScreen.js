//import lib region
import React, { useCallback, useEffect, useState, useMemo } from 'react';
 import {
   SafeAreaView,
   StatusBar,
   useColorScheme,
   FlatList,
   RefreshControl,
   TouchableOpacity,
 } from 'react-native';
 import { connect } from "react-redux";
 import SkeletonPlaceholder from "react-native-skeleton-placeholder";

 //import cutom component region
import HomeScreenStyle from './HomeScreen.style';
import { retrieveContacts } from "../../stores/ContactSlice";
import { HomeHeader, ContactCard } from './components'

//import assets region
import { PlusIcon } from '../../assets/icons';

//import constants region

//import utils region

 
 const HomeScreen = ({loading, data, navigation, retriveContactList}) => {

  //variable region
  //  const isFocused = useIsFocused();
   const [keyword, setKeyword] = useState("");
   const isDarkMode = useColorScheme() === 'dark';
  //  const dispatch = useDispatch();

  //method region
   const initFetch = useCallback(() => {
      retriveContactList();
   }, [])
 
   useEffect(() => {
     initFetch()
   }, [])

   const onRefresh = () => {
    retriveContactList();
   }

   const setSearchKeyword = (text) => setKeyword(text);

   const dataFiltered = useMemo(() => {
      return  data?.length  > 0 ?
      data?.filter((contact) => {
        let fullName = contact?.firstName+" "+contact?.lastName;
       return fullName.toLowerCase().includes(keyword.toLowerCase())}) :
      [];
   });

   const onAddContact = () => {
      navigation.navigate("FORM", {formType: "create"})
   }
   
   //render region
   return (
     <SafeAreaView style={HomeScreenStyle.homeScreenContainer}>
        <StatusBar backgroundColor={'#fff'} barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <HomeHeader onSearchTextChange={setSearchKeyword} searchKeyword={keyword} />
        <FlatList 
          style={HomeScreenStyle.homeScreenContainer}
            data={!!loading ? [1,2,3,4] :dataFiltered}
            renderItem={(contactData) => {
              if(!!loading) {
                return (<SkeletonPlaceholder.Item
                    key="ContactCardSkelaton" 
                    speed={800} 
                    highlightColor={"#F2F8FC"} 
                    backgroundColor={"#E1E9EE"} 
                    marginVertical={8} 
                    width={'100%'} 
                    height={60} 
                    borderRadius={5} 
                  />)

              }
              return (<ContactCard navigation={navigation} data={contactData} />)
            }}
            refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={onRefresh}
              />}
          />
          <TouchableOpacity testID="addContactButton" style={HomeScreenStyle.floatButtonAdd} onPress={onAddContact}>
            <PlusIcon height={25} width={25} />
          </TouchableOpacity>
     </SafeAreaView>
   );
 };
 function mapDispatchToProps(dispatch) {
    return {
      retriveContactList: () => dispatch(retrieveContacts()),
    }
 }
 function mapStateToProps(state){
  return {
    data: state.contacts.list.data,
    loading: state.contacts.list.loading,
  }
 }
 export const HomeScreenComp = HomeScreen;
 export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
 