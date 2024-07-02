import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Away from '../assets/away.svg'
import Available from '../assets/available.svg'
import Offline from '../assets/offline.svg'
import Incoming from '../assets/incoming.svg'
import Outgoing from '../assets/outgoing.svg'
import IconVector from 'react-native-vector-icons/Ionicons';

const ChatBox2 = ({ imgSource, name, time, onPress, away, offline, available, incoming, outgoing, camera, call }) => {

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{ flexDirection: 'row', width: '100%', height: 64, borderRadius: 8 }}>
      <View style={{ padding: 8, flexDirection: 'row' }}>
        <Image style={{
          padding: 20,
          height: 48,
          width: 48,
        }} source={imgSource} />
        {away && <Away style={{ alignSelf: 'flex-end', marginLeft: -10 }} />}
        {available && <Available style={{ alignSelf: 'flex-end', marginLeft: -10 }} />}
        {offline && <Offline style={{ alignSelf: 'flex-end', marginLeft: -10 }} />}
      </View>

      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginRight: 16 }}>
        <View style={{ marginStart: 4 }}>
          <Text style={{ fontWeight: 500, color: '#1B1A57', }}>{name}</Text>
          <View style={{ marginTop:4,flexDirection: 'row', alignItems: 'center' }}>
            {incoming && <Incoming />}
            {outgoing && <Outgoing />}
            <Text style={{ marginLeft:8,fontSize: 12, fontWeight: '400' }}>{time}</Text>

          </View>
        </View>
        {call && <IconVector name='call' size={24} color='#2F80ED' />}
        {camera && <IconVector name='videocam' size={24} color='#2F80ED' />}
      </View>
    </TouchableOpacity >
  )
}

export default ChatBox2;