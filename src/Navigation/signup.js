import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function signup() {
  const navigation = useNavigation();
   return (
    <View style={{flex:1}}>
    <Button title="Go To login page"  onPress={()=> navigation.replace('Login')} >
    </Button>
    </View>
  )
}