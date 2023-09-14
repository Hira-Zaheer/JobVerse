import { 
  View, 
  Text, 
  TouchableOpacity, 
  Dimensions,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Image
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
  return (


<SafeAreaView style={styles.container}>
<ScrollView style={{flex:1,backgroundColor:"white"}}>
<View style={styles.container}>
    <View style={styles.header}>
    < Image source={require("./compnents/signin-image.png")} style={styles.logo} />
    </View>
    <View style={styles.footer}>
         <Text style={styles.title}>LOG IN</Text>
    </View>
    </View>
    </ScrollView>
{/* <Button title="Go To login page"  onPress={()=> navigation.replace('Login')} >    
    </Button> */}
    </SafeAreaView>
   
   
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#84cc16',
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop:20
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      paddingHorizontal: 30
  },
  logo: {
      shadowColor:"#333333",
      shadowOffset:{width:5,height:6},
      shadowOpacity:0.6,
      shadowRadius:3
 
        },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold',
      fontFamily:"AmericanTypewriter-Bold",
      textAlign:"center"
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});