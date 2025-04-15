import { saveFileToStorage } from '@/utils/general';
import { Camera, useCameraPermissions } from 'expo-camera';
import { useRef, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Dimensions, Image } from 'react-native';
import Svg, { Rect, Circle, Defs, Mask } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

export default function App() {
  const [facing, setFacing] = useState(Camera.Constants.Type.front);
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

  async function takePicture() {
    if (cameraRef.current) {
      const photoData = await cameraRef.current.takePictureAsync();
      await saveFileToStorage(photoData.uri)
      setPhoto(photoData.uri);
    }
  }

  return (
    <View style={styles.container}>
      <Camera ref={cameraRef} style={styles.camera} type={"front"}>
        <View style={styles.overlay}>
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

          <Text style={styles.instruction}>
            Take a live picture{'\n'}Center your face, blink twice, and smile slightly
          </Text>

          <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
            <View style={styles.captureInner} />
          </TouchableOpacity>
        </View>
      </Camera>

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
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  captureInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
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
