import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import * as React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation(); //hook
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <View style={{marginTop:20}}></View>
    <Button title="Go To login page" color="#84cc16" onPress={()=> navigation.navigate('Login')} >
    green
    </Button>

    <View style={{marginTop:20}}></View>
    <Button title="Go To signup page" color="#84cc16" onPress={()=> navigation.navigate('Signup')} >
    </Button> */}

        {/* title and text  */}
        <View style={{paddingHorizontal:15}}>
          <Text style={styles.Job}>JOBVERSE</Text>
          {/*islamabad*/}
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Image
              source={require("./compnents/loc.png")}
              style={{ width: 40, height: 50 }}
            />
            <Text
              style={{ paddingTop: 15, color: "#4a4d52dd", fontWeight: "300" }}
            >
              Islamabad
            </Text>
          </View>
          <Text style={styles.text}>
            Jobverse is the pakistan's first platform for school to post jobs
            and make job hunt easier for teachers.
          </Text>
          <Text style={styles.text}>
            Post your resume and get your next job.
          </Text>

          {/* Main image and divider */}
          <View style={{ paddingHorizontal: 5,alignItems:"center",justifyContent:"center" }}>
            <Image
              source={require("./compnents/Education-amico.png")}
              style={{ width: 350, height: 350 }}
            />
            <View
              style={{
                borderColor: "black",
                width: "100%",
                height: "1%",
                flex: 1,
                borderWidth: 1,
              }}
            ></View>
          </View>
        </View>

        {/* teacher category */}
        <View style={{ paddingHorizontal: 10 }}>
          <View style={styles.banner}>
            <Image
              source={require("./compnents/tec1.jpg")}
              style={styles.Img}
            />
            <View>
              <Text style={styles.tec}>Academic Teacher</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("Signup")}
                style={styles.Button}
              >
                <Text>See More</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.banner}>
            <Image
              source={require("./compnents/img2.4fd2468e2fc10e0ef39e.png")}
              style={styles.Img}
            />
            <View>
              <Text style={styles.tec}>Academic Teacher</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("Signup")}
                style={styles.Button}
              >
                <Text>See More</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.banner}>
            <Image
              source={require("./compnents/img3.69472eb6a4584f239751.png")}
              style={styles.Img}
            />
            <View>
              <Text style={styles.tec}>Academic Teacher</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("Signup")}
                style={styles.Button}
              >
                <Text>See More</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* JobsAvailable */}
        <View></View>

        {/* footer */}
        <View style={styles.Footer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{flexDirection: "Column",
    justifyContent: "space-evenly",}}>
              <Text
                onPress={() => navigation.navigate("Login")}
                style={{paddingBottom:5 }}
              >
                Job Posts
              </Text>
              <Text
                onPress={() => navigation.navigate("Login")}
                style={{ paddingBottom:5  }}
              >
                Location
              </Text>
              <Text
                onPress={() => navigation.navigate("Login")}
                style={{ paddingBottom:5  }}
              >
                Blogs
              </Text>
            </View>

            <View style={{flexDirection: "Column",
    justifyContent: "space-evenly",paddingHorizontal:16}}>
              <Text onPress={() => navigation.navigate("Login")}
               style={{ paddingBottom:5  }}>
                Contact Us
              </Text>
              <Text onPress={() => navigation.navigate("Login")}
               style={{ paddingBottom:5  }}>FAQ</Text>
              <Text onPress={() => navigation.navigate("Login")}
               style={{ paddingBottom:5  }}>
                Documentations
              </Text>
            </View>

            <View style={{flexDirection: "Column",
    justifyContent: "space-evenly",}}>
              <Text onPress={() => navigation.navigate("Login")}
               style={{ paddingBottom:5 }}>
                Privacy Policy
              </Text>
              <Text onPress={() => navigation.navigate("Login")}
               style={{ paddingBottom:30 }}>Terms&
              Conditions</Text>
             
            </View>
          </View>

          <Text style={{textAlign:"center",color:"white",marginTop:20}}>© 2023 Jobverse.pk_ All rights reserved.</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  Job: {
    fontWeight: "900",
    fontSize: 23,
    paddingBottom: 5,
    textAlign: "center",
  },
  text: {
    color: "#595d64dd",
    fontWeight: "500",
    paddingBottom: 5,
  },
  banner: {
    // borderStyle: "solid",
    // borderWidth: 2,
    // borderColor: "black",
    paddingVertical: 20,
    // borderRadius: 10,
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-evenly",
  },
  Img: {
    width: 150,
    height: 100,
    overflow: "visible",
  },
  Button: {
    backgroundColor: "#bef264",
    borderRadius: 20,
    alignItems: "center",
    paddingVertical: 10,
  },
  tec: {
    color: "#595d64dd",
    fontWeight: "500",
    fontSize: 20,
    marginVertical: 10,
  },
  Footer: {
    backgroundColor: "#84cc16",
    marginTop: 10,
    paddingVertical: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

{
}
