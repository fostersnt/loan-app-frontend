import { StyleSheet } from 'react-native';
import HelpPage from '../screens/help';

export default function Tab() {
  return (
    <HelpPage/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
