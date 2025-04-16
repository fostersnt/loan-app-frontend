import { BackHandler, Alert, Platform } from "react-native";
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';

// export const baseUrl = "https://jsonplaceholder.typicode.com";
export const baseUrl = "https://randomuser.me/api/";

const backAction = () => {
    // Optional: Confirm exit dialog
    Alert.alert("Hold on!", "Do you really want to exit the app?", [
        {
            text: "Cancel",
            onPress: () => null,
            style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
};

export const confirmBackAction = () => {
    if (Platform.OS === 'android') {
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
        return () => backHandler.remove();
    }
};

export const saveFileToStorage = async (localUri) => {
    // const fileName = localUri.split('/').pop();
    // const destPath = FileSystem.documentDirectory + fileName;

    // await FileSystem.moveAsync({
    //     from: localUri,
    //     to: destPath,
    // });

    // console.log("File moved to:", destPath);

    const permission = await MediaLibrary.requestPermissionsAsync();
  if (permission.granted) {
    const asset = await MediaLibrary.createAssetAsync(localUri);
    await MediaLibrary.createAlbumAsync("MyApp", asset, false);
    console.log("Saved to gallery!");
  } else {
    console.log("Permission denied");
  }
}