import React from "react";
import { useState } from 'react';
import { Text, View, Image, FlatList, Modal, TouchableOpacity } from 'react-native';
import ChatBox2 from "../component/ChatBox2";
import Call from '../assets/call.svg'
import IconVector from 'react-native-vector-icons/Ionicons';
import Incoming from '../assets/incoming.svg'
import Outgoing from '../assets/outgoing.svg'
import Dots from '../assets/dots.svg'

const RecentCalls = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const users = [
        {
            id: '1',
            imageSource: require('../images/image1.png'),
            name: 'Darlene Steward',
            time: '18.31',
            onPress: () => setModalVisible(true),
            away: true,
            incoming: true,
            call: true
        },
        {
            id: '3',
            imageSource: require('../images/Image3.png'),
            name: 'Lee Williamson',
            time: 'July 08, 4.30 PM',
            available: true,
            incoming: true,
            call: true
        },
        {
            id: '4',
            imageSource: require('../images/Image4.png'),
            name: 'Ronald Mccoy',
            time: 'July 08, 1.30 PM',
            available: true,
            incoming: true,
            camera: true
        },
        {
            id: '5',
            imageSource: require('../images/Image5.png'),
            name: 'Albert Bell',
            time: 'Yesterday',
            offline: true,
            outgoing: true,
            camera: true
        },
    ]
    return (
        <View style={{ paddingHorizontal: 16, backgroundColor: '#F4F4F4', flex: 1 }}>
            <View style={{ marginHorizontal:8,flexDirection: 'row', justifyContent: 'space-between', paddingTop: 13 }}>
                <Text style={{ color: '#1B1A57', fontSize: 18, fontWeight: 500, marginBottom: 23 }}>
                    Recent Calls
                </Text>
                <Image source={require('../images/searchIcon.png')} />
            </View>
            <FlatList
                data={users}
                renderItem={({ item }) => {
                    return (
                        <ChatBox2
                            imgSource={item.imageSource}
                            name={item.name}
                            time={item.time}
                            onPress={item.onPress && item.onPress}
                            available={item.available}
                            away={item.away}
                            offline={item.offline}
                            incoming={item.incoming}
                            outgoing={item.outgoing}
                            call={item.call}
                            camera={item.camera}
                        />
                    )
                }
                }
            />
            <ModalView modalVisible={modalVisible} setModalVisible={setModalVisible} />
            <TouchableOpacity activeOpacity={0.8}
                style={{ alignSelf: 'flex-end', justifyContent: 'center', alignItems: 'center', height: 56, width: 56, borderRadius: 90, backgroundColor: '#2F80ED', marginBottom: 30 }}>
                <Call />
            </TouchableOpacity>
        </View>
    )
}

const ModalView = ({ modalVisible, setModalVisible }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}>

            <View style={{ flex: 1, justifyContent: "center", paddingHorizontal: 50 }}>

                <View style={{ backgroundColor: '#fff', paddingHorizontal: 16, elevation: 11, shadowOpacity: 0.25, borderRadius: 8 }}>
                    <View style={{ flexDirection: 'row', borderRadius: 8, alignItems: 'center', justifyContent: 'space-between' }}>

                        <Image style={{
                            padding: 20,
                            height: 48,
                            width: 48,
                        }} source={require('../images/image1.png')} />

                        <View style={{ marginLeft: -40 }}>
                            <Text style={{ fontSize: 12, fontWeight: 400 }}>Call history</Text>
                            <Text style={{ fontSize: 14, fontWeight: 500, color: '#1B1A57' }}>Darlene Steward</Text>
                        </View>

                        <Dots style={{ marginRight: -28 }} />

                    </View>
                    <View style={{ marginHorizontal: -16, height: 0.5, backgroundColor: 'gray' }} />

                    <View style={{ flexDirection: 'row', backgroundColor: 'white', marginTop: 8, paddingVertical: 8, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Incoming />
                            <View style={{ marginLeft: 8 }}>
                                <Text style={{ color: '#1B1A57', fontSize: 12, fontWeight: 400 }}>3:30 AM</Text>
                                <Text style={{ color: '#4F5E7B', fontSize: 12, fontWeight: 400 }}>33min   12.3MB</Text>
                            </View>
                        </View>
                        <IconVector name='call' size={24} color='#2F80ED' />
                    </View>


                    <View style={{ flexDirection: 'row', backgroundColor: 'white', paddingVertical: 8, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Incoming />
                            <View style={{ marginLeft: 8 }}>
                                <Text style={{ color: '#1B1A57', fontSize: 12, fontWeight: 400 }}>Yesterday, 07.53 AM</Text>
                                <Text style={{ color: '#4F5E7B', fontSize: 12, fontWeight: 400 }}>00:20   47kb</Text>
                            </View>
                        </View>
                        <IconVector name='call' size={24} color='#2F80ED' />
                    </View>

                    <View style={{ flexDirection: 'row', backgroundColor: 'white', paddingVertical: 13, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Outgoing />
                            <View style={{ marginLeft: 8 }}>
                                <Text style={{ color: '#1B1A57', fontSize: 12, fontWeight: 400 }}>July 07, 01.30 AM</Text>
                            </View>
                        </View>
                        <IconVector name='videocam' size={24} color='#2F80ED' />
                    </View>

                    <View style={{ flexDirection: 'row', backgroundColor: 'white', paddingVertical: 8, justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Incoming />
                            <View style={{ marginLeft: 8 }}>
                                <Text style={{ color: '#1B1A57', fontSize: 12, fontWeight: 400 }}>July 05, 07.25 AM</Text>
                                <Text style={{ color: '#4F5E7B', fontSize: 12, fontWeight: 400 }}>4min  230kb</Text>
                            </View>
                        </View>
                        <IconVector name='call' size={24} color='#2F80ED' />
                    </View>


                    <View style={{ flexDirection: 'row', backgroundColor: 'white', paddingVertical: 13, justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Outgoing />
                            <Text style={{ color: '#1B1A57', fontSize: 12, fontWeight: 400, marginLeft: 8 }}>July 05, 03.30 AM</Text>
                        </View>
                        <IconVector name='call' size={24} color='#2F80ED' />
                    </View>
                </View>
            </View>
        </Modal>
    )
}


export default RecentCalls;