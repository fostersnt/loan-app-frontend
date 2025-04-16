import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import appColors from '@/utils/appColors'

export default function HelpPage() {
    return (
        <View style={styles.container}>
            <Text>Help Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.white
    }
})