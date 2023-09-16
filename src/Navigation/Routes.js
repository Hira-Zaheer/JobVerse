import { Image } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "./Home";
import Signup from "./signup";
import Login from "./Login";

const Drawer = createDrawerNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 120, height: 30 }}
      source={require('./compnents/4-wo.png')}
    />
  );
}



export default function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerTitle: (props) => <LogoTitle {...props} />, headerTintColor:"black",
          headerTitleAlign:"center",
          headerStyle: { backgroundColor: "#84cc16" },
          drawerActiveBackgroundColor:"#84cc16",drawerActiveTintColor:"black"}}>

      <Drawer.Screen name="Home" component={Home} options={{ headerTitle: (props) => <LogoTitle {...props} />, headerTintColor:"black",
          headerTitleAlign:"center",
          headerStyle: { backgroundColor: "#84cc16" } }} />
      <Drawer.Screen name="Signup" component={Signup} options={{headerShown:false}} />

      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>

    </NavigationContainer>
   


  );
}
