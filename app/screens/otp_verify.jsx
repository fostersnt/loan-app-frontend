import appColors from '@/utils/appColors';
import { useNavigation } from 'expo-router';
import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

export default function OtpVerificationScreen() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef([]);
  const navigate = useNavigation();

  const handleChange = (text, index) => {
    if (/^\d$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);
      if (index < 3) {
        inputs.current[index + 1].focus();
      }
    } else if (text === '') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleVerify = () => {
    const code = otp.join('');
    if (code.length === 4) {
      // alert(`OTP Verified: ${code}`);
      // navigate.navigate("screens/home");
      navigate.navigate('(tabs)');
    } else {
      alert('Please enter the complete OTP');
    }
  };

  const handleResend = () => {
    alert('OTP has been resent!');
    // Here you'd trigger your resend API
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#6200ee" barStyle="light-content" />
      <Text style={styles.title}>Verify OTP</Text>
      <Text style={styles.subtitle}>Enter the 4-digit code sent to your phone</Text>

      <View style={styles.inputContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={ref => (inputs.current[index] = ref)}
            style={styles.input}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={text => handleChange(text, index)}
            onKeyPress={e => handleKeyPress(e, index)}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleVerify}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleResend}>
        <Text style={styles.resendText}>Resend Code</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: appColors.orange_two,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: appColors.orange_two,
    padding: 15,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 24,
    width: 60,
    color: '#333',
  },
  button: {
    backgroundColor: appColors.orange_two,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  resendText: {
    textAlign: 'center',
    color: appColors.orange_two,
    fontSize: 16,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
});
