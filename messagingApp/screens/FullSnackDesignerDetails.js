import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FsdBookmark from '../component/Bookmark';
import Ionicon from 'react-native-vector-icons/Ionicons';
import DocumentIcon from '../assets/document.svg'

const  FullSnackDesignerDetails = ({ navigation }) => {
    const Tab = createMaterialTopTabNavigator();
    return (
        <Tab.Navigator screenOptions={{ tabBarScrollEnabled: true, tabBarShowLabel: false, }} style={{ flexShrink: 1 }}>
            <Tab.Screen name="Bookmarks" component={Bookmarks}
                    options={{
                        title: '',
                        tabBarIconStyle: { alignItems: 'center' },
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={{ width: 100, flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                    <Ionicon name='star-outline' size={16} color={focused ? '#2F80ED' : '#4F5E7B'} />
                                    <Text style={{ fontSize: 12, fontWeight: '500', color: focused ? '#2F80ED' : '#4F5E7B', marginStart: 4 }}>Bookmarks</Text>
                                </View>
                            );
                        },
                    }} />
            <Tab.Screen name="Images" component={Images}
                options={{
                    title: '',
                    tabBarIconStyle: { alignItems: 'center' },
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ width: 100, flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                <Ionicon name='images-outline' size={16} color={focused ? '#2F80ED' : '#4F5E7B'} />
                                <Text style={{ fontSize: 12, fontWeight: '500', color: focused ? '#2F80ED' : '#4F5E7B', marginStart: 4 }}>Images</Text>
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen name="Video" component={Video}
                options={{
                    title: '',
                    tabBarIconStyle: { alignItems: 'center' },
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ width: 100, flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                <Ionicon name='videocam-outline' size={16} color={focused ? '#2F80ED' : '#4F5E7B'} />
                                <Text style={{ fontSize: 12, fontWeight: '500', color: focused ? '#2F80ED' : '#4F5E7B', marginStart: 4 }}>Videos</Text>
                            </View>
                        )
                    }
                }} />
            <Tab.Screen name="Document" component={Document}
                options={{
                    title: '',
                    tabBarIconStyle: { alignItems: 'center' },
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ width: 100, flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                <DocumentIcon />
                                <Text style={{ fontSize: 12, fontWeight: '500', color: focused ? '#2F80ED' : '#4F5E7B', marginStart: 4 }}>Documents</Text>
                            </View>

                        )
                    }
                }} />
        </Tab.Navigator>

    );
}
const Bookmarks = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#F4F4F4' }}>
            <FsdBookmark />
        </View>
    )
}

const Images = () => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Text>
                i am work
            </Text>
        </View>
    )
}
const Video = () => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Text>
                i am group
            </Text>
        </View>

    )
}
const Document = () => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Text>
                i am work
            </Text>
        </View>
    )
}

export default FullSnackDesignerDetails
