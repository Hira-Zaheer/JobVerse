import { View, Text, Button ,Image } from 'react-native';
import * as React from 'react';
import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const navigation = useNavigation(); //hook
  return (
    <View style={{flex:1}}>
    <View style={{marginTop:20}}></View>
    <Button title="Go To signup page" color='#84cc16' onPress={()=> navigation.navigate('signup')} >
    </Button> 
    <View style={{marginTop:20}}></View>
    <Button title="Go To login page" color="#84cc16" onPress={()=> navigation.navigate('Login')} >
    </Button>
    </View>
  )
}