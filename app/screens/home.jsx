import { Login } from '@/utils/api';
import appColors from '@/utils/appColors';
import { useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import HomeImage1 from "../../assets/images/home_image1.png";
import HomeImage2 from "../../assets/images/home_image2.png";
import HomeImage3 from "../../assets/images/home_image3.png";
import HomeImage4 from "../../assets/images/home_image4.png";
import imagePlaceHolder from "../../assets/images/image_placeholder.png";

export default function HomeScreen() {
  const navigate = useNavigation();
  const deviceWidth = Dimensions.get('screen').width;
  const imgCont = (35 / 100) * deviceWidth;
  const imgWidthAndHeight = imgCont - 20;
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

  const ActionButton = ({ icon, label, imageUrl, actionFunc = () => { } }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={actionFunc}
    >
      {
        userInfo.name == "N/A" ?
        (<Image
        style={styles.buttonImage}
        source={imagePlaceHolder}
        />):
        (
          <Image
        style={styles.buttonImage}
        source={imageUrl}
      />
        )
      }
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.greeting}>Welcome, {userInfo.name}!</Text>
        <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
          <View style={[styles.profilePicContainer, { width: imgCont, height: imgCont }]}>
            {userInfo && userInfo.picture ? (
              <Image
                style={[styles.profileImage, { width: imgWidthAndHeight, height: imgWidthAndHeight }]}
                source={{ uri: userInfo.picture }}
              />
            ) : (
              <Text>Loading...</Text>
            )}
          </View>
        </View>
        <View style={styles.balanceContainer}>
          <Text style={styles.balance}>Loan Balance</Text>
          <Text style={styles.balanceAmount}>GHs 1,250.00</Text>
        </View>

        <View style={styles.actionRow}>
          <ActionButton icon="add-circle-outline" label="Apply Loan" imageUrl={HomeImage1} />
          <ActionButton icon="document-text-outline" label="My Loans" imageUrl={HomeImage2} />
          <ActionButton icon="card-outline" label="Repay Loan" imageUrl={HomeImage3} />
          <ActionButton icon="calculator-outline" label="Verification" imageUrl={HomeImage4} actionFunc={myActionFunc} />
        </View>

        {/* <View style={styles.loanSummary}>
          <Text style={styles.sectionTitle}>🧾 Latest Loan Summary</Text>
          <Text>Loan ID: #123456</Text>
          <Text>Status: Approved ✅</Text>
          <Text>Amount: $5,000</Text>
          <Text>EMI Due: $250 on 20th Apr</Text>
        </View>

        <TouchableOpacity style={styles.notification}>
          <Text>🔔 Notifications (1)</Text>
        </TouchableOpacity> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F4F6F9',
    backgroundColor: appColors.white,
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
    // height: "20%",
    // width: "50%",
    justifyContent: "center",
    alignItems: "center",
    // marginVertical: 20,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 8,
  },
  profileImage: {
    // width: "95%",
    // height: "95%",
    borderRadius: 100,
    // shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 8,
  },
  balanceContainer: {
    backgroundColor: "#fff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 8,
    marginVertical: 30,
    height: 100,
    justifyContent: "center",
  },
  balance: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: 'bold',
    color: appColors.dark_one
  },
  balanceAmount: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: 'bold',
    color: appColors.orange_two,
    // color: '#4A90E2',
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
  buttonImage: {
    width: 100,
    height: 100,
  },
  buttonLabel: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "bold",
    color: appColors.dark_one
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
