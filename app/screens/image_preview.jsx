import appColors from '@/utils/appColors';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function ImagePreview() {

    const route = useRoute();
    const { imageUrl } = route.params;

    const navigate = useNavigation();

    const onRetake = () => {
        navigate.navigate("index");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Preview</Text>

            <View style={styles.imageWrapper}>
                <Image source={{ uri: imageUrl }} style={styles.image} />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonRetake} onPress={onRetake}>
                    <Text style={styles.buttonText}>Retake</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonProceed} onPress={()=>{}}>
                    <Text style={styles.buttonText}>Proceed</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0a0a0a',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 30,
    },
    imageWrapper: {
        width: width * 0.7,
        height: width * 0.7,
        borderRadius: (width * 0.7) / 2,
        overflow: 'hidden',
        borderWidth: 4,
        borderColor: '#ffffff',
        marginBottom: 40,
        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 20,
    },
    buttonRetake: {
        backgroundColor: appColors.orange_two,
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 30,
    },
    buttonProceed: {
        backgroundColor: appColors.violet_one,
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 30,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});
