import { Stack } from "expo-router";

export default function RootLayout() {
  return (
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{ title: "", headerShown: false }}
        />
        <Stack.Screen name="screens/home" />
        <Stack.Screen
          name="screens/slider"
          options={{ title: "", headerShown: false }}
        />
      </Stack>
  );
}
