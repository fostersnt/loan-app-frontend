import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { Tabs } from 'expo-router';
import appColors from '@/utils/appColors';
import { View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: appColors.orange_two,
      // tabBarInactiveBackgroundColor: "#EAF1FB",
      // tabBarBackground: () => (
      //   <View
      //     style={{
      //       flex: 1,
      //       backgroundColor: '#EAF1FB',
      //     }}
      //   />
      // ),
      tabBarStyle: {
        borderColor: appColors.white,
        borderRadius: 30,
        marginHorizontal: 20,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      tabBarIconStyle: {
        marginTop: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      tabBarLabelStyle: {
        // fontSize: 12,
        marginBottom: 20,
      },
      tabBarItemStyle: {
        
      },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Title',
          headerShown: false,
          tabBarIcon: ({color}) => <FontAwesome size={20} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerStyle:{elevation: 0},
          tabBarIcon: ({color}) => <FontAwesome size={20} name="cog" color={color} />,
        }}
      />
      <Tabs.Screen
        name="help"
        options={{
          title: 'Help',
          headerStyle:{elevation: 0},
          tabBarIcon: ({color}) => <Entypo size={20} name="help" color={color} />,
        }}
      />
    </Tabs>
  );
}
