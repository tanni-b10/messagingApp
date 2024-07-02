import React from 'react'
import { Text, View, StatusBar } from 'react-native';
import RecentCalls from './screens/RecentCalls'
import Settings from './screens/Settings';
import FullSnackDesigners from './screens/FullSnackDesigners';
import FullSnackDesignerHeader from './component/FullSnackDesignerHeader';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonIcons from 'react-native-vector-icons/Ionicons';
import FullSnackDesignerDetails from './screens/FullSnackDesignerDetails';
import RecentChats from './screens/AllChats';
import HomeIcon from './assets/home.svg';
import HomeDark from './assets/homedark.svg'
import Phone from './assets/phone.svg'
import PhoneDark from './assets/phonedark.svg'
import User from './assets/user.svg'
import UserDark from './assets/userdark.svg'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <>
      <StatusBar backgroundColor={'#F4F4F4'} barStyle={'dark-content'} />
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
          <Tab.Screen name="Home" component={Home} options={{
            tabBarIcon: ({ focused }) => {
              return (
                focused ?
                  <HomeIcon />
                  :
                  <HomeDark />
              )
            }
          }} />
          <Tab.Screen name="Time" component={Time} options={{
            title: '',
            tabBarIcon: ({ focused }) => {
              return (
                <IonIcons name='time' color={focused ? '#2F80ED' : '#4F5E7B'} size={24} />
              )
            }
          }} />
          <Tab.Screen name="RecentCalls" component={RecentCalls} options={{
            title: '',
            tabBarIcon: ({ focused }) => {
              return (
                focused ?
                  <Phone />
                  :
                  <PhoneDark />
              )
            }
          }} />
          <Tab.Screen name="Settings" component={Settings} options={{
            title: '',
            tabBarIcon: ({ focused }) => {
              return (
                focused ?
                  <User />
                  :
                  <UserDark />
              )
            }
          }} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

export default Navigator;

const Home = () => {
  return (

    <Stack.Navigator screenOptions={{
      headerBackVisible: false,
    }}>
      <Stack.Screen name="AllChats" component={RecentChats} options={{headerShown: false}}/>
      <Stack.Screen name="FullSnackDesigners" component={FullSnackDesigners} options={{headerShown: false}}/>
      <Stack.Screen name="FullSnackDesignerDetails" component={FullSnackDesignerDetails}
        options={{ headerTitle: ({ navigation }) => <FullSnackDesignerHeader /> }}
      />
    </Stack.Navigator>

  )
}

const Time = () => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <IonIcons name="time" size={24} />
      <Text>
        Time

      </Text>
    </View>
  )
}