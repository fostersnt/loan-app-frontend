import { BackHandler, Alert, Platform } from "react-native";

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