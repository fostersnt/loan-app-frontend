import { View, Text, StyleSheet } from 'react-native';
import HomeScreen from '../screens/home';

export default function Tab() {
  return (
    <HomeScreen/>
    // <View>
    //   <Text>CAR</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
