import { Login } from '@/utils/api';
import appColors from '@/utils/appColors';
import { useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function HomeScreen() {
  const navigate = useNavigation();
  const [userInfo, setUserInfo] = useState({
    name: "N/A",
    picture: "N/A"
  });

  useEffect(() => {
    try {
      const getData = async () => {

        const msisdn = "0553255225";
        const userData = await Login(msisdn);
        // console.log("NEW DATA === ", userData);

        const title = userData.data['name']['title']
        const firstName = userData.data['name']['first']
        const lastName = userData.data['name']['last']
        const fullName = `${title} ${firstName} ${lastName}`;
        const profilePic = userData.data['picture']['medium'];


        const updatedUserInfo = {
          name: fullName,
          picture: profilePic
        };

        setUserInfo(updatedUserInfo);

        console.log("USER INFO", userInfo);

        // console.log("USER FULL NAME === ", fullName);
        // console.log("PROFILE PICTURE === ", profilePic);
      }
      getData();
    } catch (err) {
      console.log("HOME ERROR === ", err);

    }
  }, []);

  const myActionFunc = () => {
    navigate.navigate("screens/identity_verification");
  }

  const ActionButton = ({ icon, label, actionFunc = () => { } }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={actionFunc}
    >
      <Icon name={icon} size={24} color="#4A90E2" />
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.greeting}>👋 Hello, {userInfo.name}!</Text>
        <View style={styles.profilePicContainer}>
          {userInfo && userInfo.picture ? (
            <Image
              style={styles.profileImage}
              source={{ uri: userInfo.picture }}
            />
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
        <Text style={styles.balance}>Your balance: <Text style={styles.balanceAmount}>$1,250.00</Text></Text>

        <View style={styles.actionRow}>
          <ActionButton icon="add-circle-outline" label="Apply Loan" />
          <ActionButton icon="document-text-outline" label="My Loans" />
          <ActionButton icon="card-outline" label="Repay Loan" />
          <ActionButton icon="calculator-outline" label="Verification" actionFunc={myActionFunc} />
        </View>

        <View style={styles.loanSummary}>
          <Text style={styles.sectionTitle}>🧾 Latest Loan Summary</Text>
          <Text>Loan ID: #123456</Text>
          <Text>Status: Approved ✅</Text>
          <Text>Amount: $5,000</Text>
          <Text>EMI Due: $250 on 20th Apr</Text>
        </View>

        <TouchableOpacity style={styles.notification}>
          <Text>🔔 Notifications (1)</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F9',
    padding: 20,
  },
  greeting: {
    fontSize: 22,
    // fontWeight: '600',
    marginBottom: 10,
    color: appColors.dark_one,
    textAlign: "center",
  },
  // profilePicContainer:{
  //   width: "100%",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginVertical: 20
  // },
  profilePicContainer: {
    backgroundColor: "#fff",
    borderRadius: 100,
    padding: 10,

    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 8,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
  balance: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  balanceAmount: {
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  actionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  button: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonLabel: {
    marginTop: 8,
    fontSize: 14,
  },
  loanSummary: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 10,
  },
  notification: {
    padding: 15,
    backgroundColor: '#EAF1FB',
    borderRadius: 10,
    alignItems: 'center',
  },
});
