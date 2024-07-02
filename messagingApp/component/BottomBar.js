import React from "react";
import { NavigationContainer} from '@react-navigation/native';  
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import Settings from "../screens/Settings";
import RecentCalls from "../screens/RecentCalls";
import Time from "../screens/time";

const Tab=createBottomTabNavigator();
const BottomBar =()=>{
    return(
        <View>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name='Time' component={Time}/>
                    <Tab.Screen name='RecentCalls' component={RecentCalls}/>
                    <Tab.Screen name='Settings' component={Settings}/>
                </Tab.Navigator>
            </NavigationContainer>
        </View>
    )
}

export default BottomBar;