import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import img from "../assets/images/swiper_two_image.png";
import appColors from "@/utils/appColors";

export default function SliderOne() {
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;
  console.log("WIDTH: ", screenWidth);
  console.log("HEIGHT: ", screenHeight);

  return (
    <View style={styles.main_container}>
      <View style={styles.container_1}>
        <Text style={styles.textStyle}>Tax-free Loans</Text>
      </View>
      {/* <View> */}
      <Image style={styles.img} source={img} />
      {/* </View> */}
      <View style={styles.container_1}>
        <Text style={styles.textStyle}>
          LoanGH is here to serve you with loans that are free from TAX
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
    // backgroundColor: appColors.white,
    backgroundColor: "#f0f0f0"
  },
  container_1: {
    width: "100%",
    alignItems: "center",
  },
  container_2: {
    width: "100%",
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: "50%",
  },
  textStyle: {
    fontSize: 20,
    // fontWeight: "bold",
    color: "appColors.orange_two"
  },
});
