import { View, Text, StyleSheet } from 'react-native';
import Settings from '../screens/settings';

export default function Tab() {
  return (
    <Settings/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
