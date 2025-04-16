import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          headerShown: false,
          tabBarIcon: ({myColor}) => <FontAwesome size={20} name="home" color={myColor} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerStyle:{elevation: 0},
          tabBarIcon: ({myColor}) => <FontAwesome size={20} name="cog" color={myColor} />,
        }}
      />
      <Tabs.Screen
        name="help"
        options={{
          title: 'Help',
          headerStyle:{elevation: 0},
          tabBarIcon: ({myColor}) => <Entypo size={20} name="help" color={myColor} />,
        }}
      />
    </Tabs>
  );
}
