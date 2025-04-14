import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import img from "../assets/images/swiper_one_image.png";
import appColors from '@/utils/appColors';

export default function SliderOne() {
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;
  console.log("WIDTH: ", screenWidth);
  console.log("HEIGHT: ", screenHeight);

  return (
    <View style={styles.main_container}>
      <View>
        <Text style={styles.textStyle}>Apply for loans easily</Text>
      </View>
      {/* <View> */}
        <Image
        style={styles.img}
        source={img}
        />
      {/* </View> */}
      <View>
      <Text style={styles.textStyle}>Choose a loan that meet your needs and apply with our simple step</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    main_container:{
        flex: 1,
        justifyContent: "space-around",
        padding: 10,
        backgroundColor: appColors.white
    },
    img:{
      width: "100%",
      height: "50%"
    },
    textStyle:{
      fontSize: 20,
    }
})