import appColors from '@/utils/appColors'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Swiper from 'react-native-swiper'

export default function Slider() {
    return (
      <Swiper
      style={styles.wrapper}
      showsButtons={false}
      loop={false} index={0}
      dot={
        <View style={styles.dotStyle}/>
      }
      activeDot={
        <View style={styles.activeDotStyle}/>
      }
      >
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    )
}

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    },
    dotStyle:{
        backgroundColor: appColors.white,
        width: 10,
        height: 10,
        borderRadius: 20,
        margin: 5,
    },
    activeDotStyle:{
        backgroundColor: appColors.orange_two,
        width: 10,
        height: 10,
        borderRadius: 20,
        margin: 5,
    }
  })