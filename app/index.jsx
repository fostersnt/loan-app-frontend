import appColors from "@/utils/appColors";
import { Link } from "expo-router";
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import splashImage from "../assets/images/splash_image.png";

export default function Index() {
  return (
    <View
      style={styles.mainContainer}
    >
      <StatusBar hidden/>
      {/* <Text style={styles.textStyle}>Edit app/index.tsx to edit this screen.</Text> */}
      <Image source={splashImage} style={styles.splashImageStyle}/>
      <Link style={styles.textStyle} href="home">Go To Home Page</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: appColors.violet_one
  },
  splashImageStyle:{
    // color: appColors.white,
    width: 300,
    height: 300,
  },
  textStyle:{
    color: appColors.white,
  }
})