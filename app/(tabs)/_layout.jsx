import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { Tabs } from 'expo-router';
import appColors from '@/utils/appColors';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarShowLabel: false,
      tabBarActiveTintColor: appColors.orange_two,
      tabBarStyle: {
        borderColor: appColors.white,
        borderRadius: 30,
        marginHorizontal: 20,
        marginBottom: 10,
        height: 80,
        // iOS Shadow
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 15,
        shadowOffset: {
          width: 0,
          height: 10,
        },
        // Android Shadow
        elevation: 10,
      },
      tabBarIconStyle: {
        marginTop: 20,
        marginBottom: 20,
      },
      // tabBarLabel: () => null
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={30} name="home" color={color} />
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerStyle: { elevation: 0 },
          tabBarIcon: ({ color }) => <FontAwesome size={30} name="cog" color={color} />,
        }}
      />
      <Tabs.Screen
        name="help"
        options={{
          title: 'Help',
          headerStyle: { elevation: 0 },
          tabBarIcon: ({ color }) => <Entypo size={30} name="help" color={color} />,
        }}
      />
    </Tabs>
  );
}
