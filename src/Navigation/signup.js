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
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function signup() {
  const navigation = useNavigation();
   return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={{backgroundColor:"#fff"}}>
     <View style={styles.container }>
    <View style={styles.header}>
    < Image source={require("./compnents/signup-image.png")} style={styles.logo} />
    </View>
    <View style={styles.footer}>
    <Text style={styles.title}>SIGN UP</Text>
    </View>
  
    


{/* <Button title="Go To login page"  onPress={()=> navigation.replace('Login')} >    
    </Button> */}
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

const {height} = Dimensions.get("screen");
const height_logo = height * 0.30;


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#84cc16'
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
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo,
      shadowColor:"#333333",
      shadowOffset:{width:6,height:6},
      shadowOpacity:0.6,
      shadowRadius:3,
        },

  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold',
      justifyContent:"center",
      textAlign:"center",
      fontFamily:'AmericanTypewriter-Bold'
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
      color: 'black',
      fontWeight: 'bold'
  }
});