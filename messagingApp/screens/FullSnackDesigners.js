import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React, { useRef, useState ,useEffect} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Modalize } from 'react-native-modalize';
import Channel from '../component/Channels';
import Away from '../assets/away.svg'
import Available from '../assets/available.svg'

const FullSnackDesigners = ({ navigation }) => {
    useEffect(() => {
        navigation.getParent()?.setOptions({
        tabBarStyle: {
            display: "none"
        }
        });
        return () => navigation.getParent()?.setOptions({
        tabBarStyle: undefined
        });
    }, [navigation]);
  
    const [text, setText] = useState('')
    const sheetref = useRef(false)
    return (
        <>
            <ScrollView style={{ flexGrow: 1, backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row', flex: 1, alignItems: "center", paddingHorizontal: 14 }}>
                    <Ionicons onPress={() => navigation.navigate('AllChats')}name='arrow-back' size={24} />
                    <Image source={require('../images/fsdImage.png')} style={{ height: 60, width: 60 }} />

                    <TouchableOpacity onPress={() => navigation.navigate('FullSnackDesignerDetails')}>
                        <Text style={{color:'#1B1A57',fontWeight: 500, fontSize: 18, }}>FullSnack Designers</Text>
                        <Text style={{ fontWeight: 400, fontSize: 12 }}>7 Online, from 12 peoples</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end' }}>
                        <Ionicons name='videocam' size={24} style={{ marginRight: 26 }} />
                        <Ionicons name='ellipsis-vertical' size={24} />
                    </View>
                </View>
                <View style={{ marginLeft: 64, padding: 8, backgroundColor: '#EDEDED', marginRight: 49, borderRadius: 12, marginTop: 24 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: 500, fontSize: 12, color: '#F2994A' }}>
                            Mike Mazowski
                        </Text>
                        <Text style={{ fontWeight: 400, fontSize: 12, color: '#A1A1BC' }}>
                            admin
                        </Text>
                    </View>

                    <Text style={{ color: '#1B1A57', flex: 1 }}>
                        Hello guys, we have discussed about post-corona
                        vacation plan and our decision is to go to Bali.
                        We will have a very big party after this corona ends!
                        These are some images about our destination
                    </Text>
                    <Text style={{ fontSize: 12, fontWeight: 400, alignSelf: 'flex-end', color: '#A1A1BC' }}>
                        16.04
                    </Text>

                </View>

                <View style={{ marginTop: 10 }}>

                    <Image source={require('../images/rectangle.png')} style={{ marginLeft: 68 }} />

                    <View style={{ flexDirection: 'row', marginLeft: 15 }}>
                        <Image style={{ marginTop: 60 }} source={require('../images/fsdChatImage.png')} />
                        <Away style={{ marginLeft: -8, alignSelf: 'flex-end' }} />
                        <Image style={{ marginLeft: 10 }} source={require('../images/rectangle1.png')} />
                        <Image style={{ marginLeft: 5 }} source={require('../images/rectangle2.png')} />
                    </View>
                </View>


                <View style={{ marginTop: 24, marginLeft: 121, marginRight: 54, flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ backgroundColor: '#2F80ED', padding: 8, paddingHorizontal: 10, borderBottomLeftRadius: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10, color: 'white' }}>
                        That’s very nice place! you
                        guys made a very good decision.
                        Can’t wait to go on vacation!
                    </Text>

                    <Image style={{ height: 40, width: 40, marginLeft: 7 }} source={require('../images/settingImage.png')} />
                    <Available style={{ marginLeft: -8, marginTop: 24 }} />
                </View>

                <View style={{ marginTop: 19, flexDirection: 'row' }}>
                    <Image style={{ marginLeft: 64 }} source={require('../images/loading.png')} />
                    <Image style={{ marginLeft: 10, height: 18, width: 18 }} source={require('../images/image1.png')} />
                    <Image style={{ height: 18, width: 18, marginLeft: -8 }} source={require('../images/Image3.png')} />
                    <Image style={{ height: 18, width: 18, marginLeft: -8 }} source={require('../images/Image4.png')} />
                    <Text style={{ color: '#4F5E7B' }}>  +2 others are typing</Text>
                </View>
            </ScrollView>
            <TouchableOpacity onPress={() => sheetref.current.open()}
                style={{
                    paddingVertical: 16, paddingHorizontal: 16, flexDirection: 'row', justifyContent: 'space-between',
                    backgroundColor: 'white', borderColor: '#EDEDED', borderWidth: 1
                }}>
                <Text style={{ fontSize: 12, fontWeight: 500, color: '#2F80ED' }}>
                    #General
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    <Ionicons style={{ marginRight: 24 }} name='chevron-up-outline' color={'#2F80ED'} />
                    <Ionicons name='ellipsis-vertical' color={'#2F80ED'} />
                </View>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', backgroundColor: 'white', paddingHorizontal: 16, alignItems: 'center', justifyContent: 'space-between' }}>
                <Ionicons name='happy-outline' size={24} />
                <TextInput
                    value={text}
                    placeholder='Write a message...'
                    onChangeText={(value) => setText(value.trim())}
                    style={{ flex: 1, }} />
                <Ionicons name='attach' size={24} />
                <View style={{ backgroundColor: '#2F80ED', width: 40, height: 40, alignItems: 'center', borderRadius: 90, justifyContent: 'center', marginLeft: 16 }}>
                    <Ionicons name='mic' size={24} color={'white'} />
                </View>

            </View>

            <Modalize ref={sheetref}
                snapPoint={350}
                closeSnapPointStraightEnabled={false}
                adjustToContentHeight={true}
            >
                <Channel />
            </Modalize>
        </>
    )
}

export default FullSnackDesigners