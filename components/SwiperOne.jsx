import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import img from "../assets/images/swiper_one_image.png";
import appColors from "@/utils/appColors";
// import { confirmAction } from "@/utils/general";

export default function SliderOne() {
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;

  const font_size = screenWidth / 12;

  return (
      <View style={styles.main_container}>
      <View style={styles.container_1}>
        <Text style={[styles.textStyle_1, { fontSize: font_size }]}>Fast & Secure Approval</Text>
      </View>
      <Image style={styles.img} source={img} />
      <View style={styles.container_1}>
        <Text style={styles.textStyle_2}>
          Your loan application is processed swiftly and securely. Get fast approval and know the status of your loan application within moments.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: appColors.white,
    // backgroundColor: "#f0f0f0"
  },
  container_1: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  container_2: {
    width: "100%",
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: "50%",
  },
  textStyle_1: {
    // fontSize: 40,
    // fontWeight: "bold",
    textAlign: "center",
    color: appColors.orange_two
  },
  textStyle_2: {
    fontSize: 20,
    // fontWeight: "bold",
    textAlign: "center",
    color: appColors.dark_one
  },
});
