// import appColors from "@/utils/appColors";
// import { Image, StatusBar, StyleSheet, View } from "react-native";
// import bankNote from "../assets/images/Banknote.png";
// import { useEffect, useState } from "react";
// import { useNavigation } from "expo-router";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import * as Crypto from "expo-crypto";
// import { v4 as uuidv4 } from "uuid";

// export default function Index() {
//   const navigate = useNavigation();
//   const [deviceId, setDeviceId] = useState(null);

//   useEffect(() => {
//     async function getOrCreateDeviceId() {
//       try {
//         let Id = await AsyncStorage.getItem("deviceId");
//         if (!Id) {
//           const randomBytes = await Crypto.getRandomBytesAsync(16);
//           Id = uuidv4({ random: Array.from(randomBytes) });
//           await AsyncStorage.setItem("deviceId", Id);
//         }
//         setDeviceId(Id);
//         console.log("DEVICE ID === ", Id);
//       } catch (err) {
//         console.log("ERROR MESSAGE === ", err);
//       }
//     }

//     getOrCreateDeviceId();

//     setTimeout(() => {
//       console.log("HELLO WORLD");
//       if (deviceId == null) {
//         navigate.navigate("screens/swiper");
//       } else {
//         navigate.navigate("screens/login");
//       }
//     }, 3000);
//   }, []);

//   return (
//     <View style={styles.mainContainer}>
//       <StatusBar hidden />
//       <Image source={bankNote} style={styles.splashImageStyle} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: appColors.white,
//   },
//   splashImageStyle: {
//     width: "100%",
//     height: "50%",
//   },
//   textStyle: {
//     color: appColors.white,
//   },
// });


import appColors from '@/utils/appColors';
import { useCameraPermissions, CameraView } from 'expo-camera';
import { useRef, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Dimensions, Image } from 'react-native';
import Svg, { Rect, Circle, Defs, Mask } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

export default function App() {
  // const [facing, setFacing] = useState(Camera.Constants.Type.front);
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
  const [photo, setPhoto] = useState(null);

  if (!permission) return <View />;
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  const takePicture = async () => {
    console.log("HELL ");
    
    // if (cameraRef.current) {
      const photoData = await cameraRef.current.takePictureAsync();
      setPhoto(photoData.uri);
      console.log("PHOTO DETAILS === ", photoData);
    // }
  }

  return (
    <View style={styles.container}>
      <CameraView
        ref={cameraRef}
        style={styles.camera}
        type={"front"}
        mode='picture'
        pictureSize='150'
        autofocus='on'
      >
        <Svg height={height} width={width}>
          <Defs>
            <Mask id="mask" x="0" y="0" height="100%" width="100%">
              <Rect height="100%" width="100%" fill="white" />
              <Circle
                cx={width / 2}
                cy={height / 2.5}
                r={130}
                fill="black"
              />
            </Mask>
          </Defs>
          <Rect
            height="100%"
            width="100%"
            fill="rgba(0,0,0,0.6)"
            mask="url(#mask)"
          />
        </Svg>
        <View style={styles.overlay}>

          <Text style={styles.instruction}>
            Take a live picture{'\n'}Center your face, blink twice, and smile slightly
          </Text>
          <TouchableOpacity style={styles.captureButton} onPress={ takePicture }>
            <View style={styles.captureInner} />
          </TouchableOpacity>
        </View>
      </CameraView>

      {/* Show captured photo */}
      {photo && (
        <View style={styles.preview}>
          <Image source={{ uri: photo }} style={styles.photo} />
          <Button title="Retake" onPress={() => setPhoto(null)} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
    color: 'white',
  },
  camera: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0, left: 0, bottom: 0, right: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 60,
  },
  instruction: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
  },
  captureButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: appColors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  captureInner: {
    // position: "absolute",
    zIndex: 2,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: appColors.white,
  },
  preview: {
    position: 'absolute',
    top: 80,
    alignSelf: 'center',
    alignItems: 'center',
  },
  photo: {
    width: 300,
    height: 400,
    borderRadius: 10,
  },
});
