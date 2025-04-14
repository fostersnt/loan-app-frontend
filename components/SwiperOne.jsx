import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import img from "../assets/images/swiper_one_image.png";
import appColors from '@/utils/appColors';

export default function SliderOne() {
  
  return (
    <View style={styles.main_container}>
      <View>
        <Text>Apply for loans easily</Text>
      </View>
      {/* <View> */}
        <Image
        style={styles.img}
        source={img}
        />
      {/* </View> */}
      <View>
      <Text>Choose a loan that meet your needs and apply with our simple step</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    main_container:{
        flex: 1,
        // display: "flex",
        // flexDirection: "column",
        justifyContent: "space-around",
        padding: 10,
        backgroundColor: appColors.white
    },
    img:{
      width: "100%",
      height: "50%"
    }
})