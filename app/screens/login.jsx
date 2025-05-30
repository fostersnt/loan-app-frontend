import appColors from '@/utils/appColors';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, Image } from 'react-native';
import img from "../../assets/images/Login-amico.png";

export default function PhoneLoginScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigation();

  const handleLogin = () => {
    if (phoneNumber.trim().length === 0) {
      alert('Please enter your phone number');
      return;
    }

    navigate.navigate("screens/otp_verify");
    // You can add phone number validation here too
    // alert(`Logging in with ${phoneNumber}`);
  };

  return (
    <View style={styles.container}>
      {/* <StatusBar backgroundColor="#6200ee" barStyle="light-content" /> */}
      <Text style={styles.title}>Welcome to LoanGH</Text>
      {/* <View style={styles.imgContainer}>
        <Image
          source={img}
          style={styles.img}
        />
      </View> */}
      <View>
        <Text style={styles.subtitle}>Enter your phone number to continue</Text>

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="#aaa"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    justifyContent: 'center',
    // alignItems: "center"
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    // color: '#6200ee',
    color: appColors.orange_two,
    marginBottom: 10,
  },
  img: {
    width: 200,
    height: 200,
  },
  imgContainer: {
    width: "100%",
    // justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  button: {
    backgroundColor: appColors.orange_two,
    // backgroundColor: '#6200ee',
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

