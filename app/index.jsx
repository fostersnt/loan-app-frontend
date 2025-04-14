import appColors from "@/utils/appColors";
import { Image, StatusBar, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {Video} from "expo-av";
import bankNote from "../assets/images/Banknote.png";
import { useEffect } from "react";
import { useNavigation } from "expo-router";
// const moneyMotivation = require ("../assets/images/Money_motivation.mp4");

export default function Index() {

  const navigate = useNavigation();

  useEffect(()=>{
    setTimeout(()=>{
      console.log("HELLO WORLD");
      navigate.navigate('screens/swiper');
    }, 3000) 
  }, [])

  return (
    <View style={styles.mainContainer}>
      <StatusBar hidden />
      {/* <Icon name="money" size={150} color={appColors.white} /> */}
      <Image source={bankNote} style={styles.splashImageStyle}/>
    </View>
  );
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: appColors.white,
  },
  splashImageStyle: {
    // color: appColors.white,
    width: "100%",
    height: "50%",
  },
  textStyle: {
    color: appColors.white,
  },
});
