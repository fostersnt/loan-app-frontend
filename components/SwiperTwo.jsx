import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import img from "../assets/images/swiper_two_image.png";
import appColors from "@/utils/appColors";

export default function SliderOne() {
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;
  
  const font_size = screenWidth / 10;

  return (
    <View style={styles.main_container}>
      <View style={styles.container_1}>
        <Text style={[styles.textStyle_1, {fontSize: font_size}]}>Low interest rate</Text>
      </View>
      {/* <View> */}
      <Image style={styles.img} source={img} />
      {/* </View> */}
      <View style={styles.container_2}>
        <Text style={styles.textStyle_2}>
          We don't just provide you with a loan. We ensure the loan is flexible.
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
  },
  container_2: {
    // width: "100%",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center"
  },
  img: {
    width: "100%",
    height: "50%",
  },
  textStyle_1: {
    fontSize: 20,
    color: appColors.dark_one,
    textAlign: "center",
    // fontWeight: "bold",
    // color: appColors.orange_two
  },
  textStyle_2: {
    fontSize: 20,
    color: appColors.dark_one,
    textAlign: "center",
    // fontWeight: "bold",
    // color: appColors.orange_two
  },
});
