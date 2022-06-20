import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/home/HomeScreen";
import DetailScreen from "../screens/detail/DetailScreen";
import FormScreen from '../screens/form/FormScreen';


const Stack = createStackNavigator();

const Navigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={"HOME"} component={HomeScreen} />
        <Stack.Screen name={"DETAIL"} component={DetailScreen} />
        <Stack.Screen name={"FORM"} component={FormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
