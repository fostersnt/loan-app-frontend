import SwiperOne from "@/components/SwiperOne";
import SwiperThree from "@/components/SwiperThree";
import SwiperTwo from "@/components/SwiperTwo";
import appColors from "@/utils/appColors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";

export default function SwiperScreen() {
  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={false}
      loop={false}
      index={0}
      dot={<View style={styles.dotStyle} />}
      activeDot={<View style={styles.activeDotStyle} />}
    >
      <SwiperOne />
      <SwiperTwo />
      <SwiperThree />
    </Swiper>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: appColors.white
    //   backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //   backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //   backgroundColor: '#92BBD9'
  },
  text: {
    //   color: '#fff',
    fontSize: 30,
    fontWeight: "bold",
  },
  dotStyle: {
    backgroundColor: appColors.white,
    width: 10,
    height: 10,
    borderRadius: 20,
    margin: 5,
  },
  activeDotStyle: {
    backgroundColor: appColors.orange_two,
    width: 10,
    height: 10,
    borderRadius: 20,
    margin: 5,
  },
});
