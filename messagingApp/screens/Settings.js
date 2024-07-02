import React, { useState } from "react";
import { Text, View, Image } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import ToggleSwitch from "toggle-switch-react-native";
import HomeIcon from '../assets/home.svg'
import StorageIcon from '../assets/storage.svg'
import Lock from '../assets/lock.svg'

const Settings = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <View style={{ paddingHorizontal: 24, backgroundColor: '#F4F4F4' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 24 }}>
                <Text style={{ color: '#1B1A57', fontSize: 18, fontWeight: 500 }}>
                    Settings
                </Text>
                <IonIcons name='search-outline' size={24}/>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <Image source={require('../images/settingImage.png')} />
                <View style={{ marginLeft: 24 }}>
                    <Text style={{ color:'#1B1A57',fontWeight: 500, fontSize: 18 }}>Adina Nurrahma</Text>
                    <Text style={{ fontWeight: 400, fontSize: 12 }}>Trust your feelings , be a good human beings</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: 'space-between', paddingVertical: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <IonIcons name='moon' size={24} color={'#2F80ED'} />
                    <Text style={{ color: '#4F5E7B', fontWeight: 400, fontSize: 14, marginStart: 16 }}>Dark mode</Text>
                </View>
                <ToggleSwitch
                    isOn={toggle}
                    onColor="#2F80ED"
                    offColor="gray"
                    size="small"
                    onToggle={() => setToggle(!toggle)}
                />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 20, justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ height: 24, width: 24, backgroundColor: '#2F80ED', padding: 2 }}>
                        <IonIcons name='person' size={20} color={'white'} />
                    </View>
                    <Text style={{ color: '#4F5E7B', fontWeight: 400, fontSize: 14, marginStart: 16 }}>Account</Text>
                </View>
                <IonIcons name='chevron-forward' size={24} />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16, justifyContent: 'space-between', paddingBottom: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <IonIcons name='notifications' size={24} color='#2F80ED' />
                    <Text style={{ color: '#4F5E7B', fontWeight: 400, fontSize: 14, marginStart: 16 }}>Notification</Text>
                </View>
                <IonIcons name='chevron-forward' size={24} />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16, justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                    <HomeIcon />
                    <Text style={{ color: '#4F5E7B', fontWeight: 400, fontSize: 14, marginStart: 16 }}>Chat settings</Text>
                </View>
                <IonIcons name='chevron-forward' size={24} />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16, justifyContent: 'space-between', paddingVertical: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <StorageIcon />
                    <Text style={{ color: '#4F5E7B', fontWeight: 400, fontSize: 14, marginStart: 16 }}>Data and storage</Text>
                </View>
                <IonIcons name='chevron-forward' size={24} />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16, justifyContent: 'space-between', paddingBottom: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Lock />
                    <Text style={{ color: '#4F5E7B', fontWeight: 400, fontSize: 14, marginStart: 16 }}>Privacy and security</Text>
                </View>
                <IonIcons name='chevron-forward' size={24} />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16, justifyContent: 'space-between', paddingBottom: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <IonIcons name='information-circle' size={24} color='#2F80ED' />
                    <Text style={{ color: '#4F5E7B', fontWeight: 400, fontSize: 14, marginStart: 16 }}>About</Text>
                </View>
                <IonIcons name='chevron-forward' size={24} />
            </View>
        </View>
    )
}

export default Settings;