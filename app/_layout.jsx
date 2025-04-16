import appColors from "@/utils/appColors";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
      <SafeAreaView style={{ flex: 1}}>
        <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          contentStyle: {
            backgroundColor: appColors.white,
            // justifyContent: "center",
            // alignItems: "center",
          }
        }}
      >
        <Stack.Screen
          name="index"
          options={{ title: "", headerShown: false }}
        />
        <Stack.Screen
          name="screens/swiper"
          options={{ title: "", headerShown: false }}
        />
        <Stack.Screen
          name="screens/login"
          options={{ title: "", headerShown: false }}
        />
        <Stack.Screen
          name="screens/otp_verify"
          options={{ title: "", headerShown: false }}
        />
        <Stack.Screen
          name="screens/home"
          options={{ title: "", headerShown: false }}
        />
        <Stack.Screen
          name="screens/identity_verification"
          options={{ title: "", headerShown: false }}
        />
        <Stack.Screen
          name="screens/image_preview"
          options={{ title: "", headerShown: false }}
        />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      </SafeAreaView>
  );
}
