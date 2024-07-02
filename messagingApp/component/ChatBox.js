import React from "react";
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Away from '../assets/away.svg'
import Available from '../assets/available.svg'
import Offline from '../assets/offline.svg'
import { useNavigation } from "@react-navigation/native";

const ChatBox = ({ id, imgSource, name, message, time, unseenMessage, away, available, offline }) => {

    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => {
                id==2 &&
                navigation.navigate('FullSnackDesigners');
        }} style={{ paddingHorizontal:8,flexDirection: 'row', width: '100%', height: 64, backgroundColor: (unseenMessage == 'true') ? '#d4ebf2' : '#fff', borderRadius: 8 }}>
            <View style={{ padding: 8, flexDirection: "row" }}>
                <Image style={{
                    padding: 20,
                    height: 48,
                    width: 48,
                }} source={imgSource} />
                {away && <Away style={{ alignSelf: 'flex-end', marginLeft: -10 }} />}
                {available && <Available style={{ alignSelf: 'flex-end', marginLeft: -10 }} />}
                {offline && <Offline style={{ alignSelf: 'flex-end', marginLeft: -10 }} />}

            </View>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 8, paddingHorizontal: 8 }}>
                    <Text style={{ fontWeight: 500, color: '#1B1A57' }}>{name}</Text>
                    <Text style={{}}>{time}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 4, paddingHorizontal: 8 }}>
                    <Text>{message}</Text>
                    {unseenMessage == 'true' ? <Image source={require('../images/newMessage.png')} /> : null}
                </View>
            </View>
            
        </TouchableOpacity >
    )
}

export default ChatBox;