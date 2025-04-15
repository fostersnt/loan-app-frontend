import appColors from "@/utils/appColors";
import { Image, StatusBar, StyleSheet, View } from "react-native";
import bankNote from "../assets/images/Banknote.png";
import { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Crypto from "expo-crypto";
import { v4 as uuidv4 } from "uuid";

export default function Index() {
  const navigate = useNavigation();
  const [deviceId, setDeviceId] = useState(null);

  useEffect(() => { 
    async function getOrCreateDeviceId() {
      try {
        let Id = await AsyncStorage.getItem("deviceId");
        if (!Id) {
          const randomBytes = await Crypto.getRandomBytesAsync(16);
          Id = uuidv4({ random: Array.from(randomBytes) });
          await AsyncStorage.setItem("deviceId", Id);
        }
        setDeviceId(Id);
        console.log("DEVICE ID === ", Id);
      } catch (err) {
        console.log("ERROR MESSAGE === ", err);
      }
    }

    getOrCreateDeviceId();

    setTimeout(() => {
      console.log("HELLO WORLD");
      if (deviceId == null) {
        navigate.navigate("screens/swiper");
      } else {
        navigate.navigate("screens/login");
      }
    }, 3000);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <StatusBar hidden />
      <Image source={bankNote} style={styles.splashImageStyle} />
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
    width: "100%",
    height: "50%",
  },
  textStyle: {
    color: appColors.white,
  },
});
