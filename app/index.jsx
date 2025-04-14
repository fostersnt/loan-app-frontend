import appColors from "@/utils/appColors";
import { StatusBar, StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Index() {
  return (
    <View
      style={styles.mainContainer}
    >
      <StatusBar hidden/>
      <Icon name="money" size={150} color={appColors.white} />
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