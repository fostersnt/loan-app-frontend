import appColors from "@/utils/appColors";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.mainContainer}
    >
      <Text style={styles.textStyle}>Edit app/index.tsx to edit this screen.</Text>
      <Link style={styles.textStyle} href="home">Go To HHome Page</Link>
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
  textStyle:{
    color: appColors.white,
  }
})