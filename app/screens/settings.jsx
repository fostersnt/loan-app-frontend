import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import appColors from '@/utils/appColors'

export default function Settings() {
    return (
        <View style={styles.container}>
            <Text>Settings</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.white
    }
})