import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import img from "../assets/images/swiper_three_image.png";
import appColors from "@/utils/appColors";

export default function SliderOne() {
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;
  console.log("WIDTH: ", screenWidth);
  console.log("HEIGHT: ", screenHeight);

  return (
    <View style={styles.main_container}>
      <View style={styles.container_1}>
        <Text style={styles.textStyle}>Flexible repayment plan</Text>
      </View>
      <View style={styles.container_2}>
        <Text style={styles.textStyle}>
        With LoanGH, enjoy flexible repayment options tailored to bring you peace of mind.
        </Text>
      </View>
      {/* <View> */}
      <Image style={styles.img} source={img} />
      {/* </View> */}
      <View style={styles.container_3}>
        <TouchableOpacity>
          <Text style={styles.btnText}>Get Started</Text>
        </TouchableOpacity>
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
    width: "100%",
    alignItems: "center",
  },
  container_3: {
    width: "100%",
    alignItems: "center",
    backgroundColor: appColors.orange_two,
    paddingVertical: 10
  },
  btnText:{
    color: appColors.white,
    fontSize: 20
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
