import appColors from '@/utils/appColors';
import { useCameraPermissions, CameraView } from 'expo-camera';
import { useNavigation } from 'expo-router';
import { useRef, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Dimensions, Image } from 'react-native';
import Svg, { Rect, Circle, Defs, Mask } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

export default function App() {
  // const [facing, setFacing] = useState(Camera.Constants.Type.front);
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
  // const [photo, setPhoto] = useState(null);

  const navigate = useNavigation();

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

    const photoData = await cameraRef.current.takePictureAsync();
    // setPhoto(photoData.uri);
    navigate.navigate("screens/image_preview", {imageUrl: photoData.uri})
    console.log("PHOTO DETAILS === ", photoData);
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
          <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
            <View style={styles.captureInner} />
          </TouchableOpacity>
        </View>
      </CameraView>
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
    position: "absolute",
    zIndex: 2,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: appColors.white,
  },
  preview: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: appColors.orange_two
  },
  photo: {
    width: 250,
    height: 250,
    borderRadius: 150,
  },
});