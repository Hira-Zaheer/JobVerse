import { View, Text, Platform ,Image } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import signup from "./signup";
import Login from "./Login";

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 120, height: 30 }}
      source={require('./compnents/ww.png')}
    />
  );
}



export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor:"white",
          headerTitleAlign:"center",
          // headerBackVisible:false,
          
          headerStyle: { backgroundColor: "#84cc16" }
        }} 
      >
      <Stack.Screen name="Home" component={Home} options={{ headerTitle: (props) => <LogoTitle {...props} /> }} /> 
             <Stack.Screen name="signup" component={signup} options={{ headerTitle: (props) => <LogoTitle {...props} /> }} />
        <Stack.Screen name="Login" component={Login}  options={{ headerTitle: (props) => <LogoTitle {...props} /> }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
