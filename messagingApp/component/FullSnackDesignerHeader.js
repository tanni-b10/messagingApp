import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Dots from '../assets/dots.svg'
import ToggleSwitch from 'toggle-switch-react-native';
import { useNavigation } from "@react-navigation/native";

const FullSnackDesignersHeader = () => {
  const [toggle, setToggle] = useState(false)
  const navigation=useNavigation()
  return (
    <View style={{ flex: 1, marginRight: 17, marginLeft: -15 }}>

      <Image style={{ width: '100%' }} source={require('../images/fsd2Image.png')} />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', marginHorizontal: 16, alignItems: 'center' }}>
        <Ionicons onPress={() => navigation.goBack()} name="arrow-back" size={30} />
        <Text style={{ color: '#1B1A57', fontWeight: 500, fontSize: 18 }}>FullSnack Designers</Text>
        <Dots />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 40, marginRight: 16, marginTop: 40, flex: 1 }}>
        <Ionicons name='information-circle-outline' size={24} />
        <Text style={{ color: '#4F5E7B', fontSize: 14, fontWeight: 400, marginLeft: 16 }}>
          We are fullsnack designers,
          yes. From food, for food, by food!
        </Text>
      </View>
      <View style={{ flexDirection: 'row', paddingHorizontal: 24, margin: 16, alignItems: 'center', flex: 1, }}>
        <Ionicons name='notifications-outline' size={24} />
        <Text style={{ color: '#4F5E7B', fontSize: 14, fontWeight: 400, marginLeft: 16 }}>
          Notifications
        </Text>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <ToggleSwitch
            isOn={toggle}
            onColor="#2F80ED"
            offColor="gray"
            size="small"
            onToggle={() => setToggle(!toggle)}
          />
        </View>
      </View>
    </View>

  )
}
export default FullSnackDesignersHeader