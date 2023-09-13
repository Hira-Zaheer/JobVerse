import { View, Text , Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Login() {
  const navigation = useNavigation();
  return (
    <View style={{flex:1}}>
     
      <Button title="Go To home "  onPress={()=> navigation.replace ('Home')}/>
    </View>
  )
} 