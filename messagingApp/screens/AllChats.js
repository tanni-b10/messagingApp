import React from "react";
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import ChatBox from "../component/ChatBox";
import { Modalize } from 'react-native-modalize';
import { useRef } from 'react';
import CreateCategory from "../component/CreateCategory";
import Message from '../assets/message.svg'
import IonIcons from 'react-native-vector-icons/Ionicons';

const users = [
    {
        id: '1',
        imageSource: require('../images/image1.png'),
        name: 'Darlene Steward',
        message: 'pls take a look at the images',
        time: '18.31',
        unseenMessage: 'true',
        away: true
    },
    {
        id: '2',
        imageSource: require('../images/Image2.png'),
        name: 'Fullsnack Designers',
        message: 'Hello guys, we have discussed about ...',
        time: '16.04',
        unseenMessage: '',
    },
    {
        id: '3',
        imageSource: require('../images/Image3.png'),
        name: 'Lee Williamson',
        message: 'Yes, that’s gonna work, hopefully. ',
        time: '06.12',
        unseenMessage: '',
        available: true
    },
    {
        id: '4',
        imageSource: require('../images/Image4.png'),
        name: 'Ronald Mccoy',
        message: 'Thanks dude 😉',
        time: 'Yesterday',
        unseenMessage: '',
        offline: true
    },
    {
        id: '5',
        imageSource: require('../images/Image5.png'),
        name: 'Albert Bell',
        message: 'I‘m happy this anime has such grea...',
        time: 'Yesterday',
        unseenMessage: '',
        offline: true
    },
]

const RecentChats = () => {
    const modalizeRef = useRef();

    const onOpen = () => {
        modalizeRef.current?.open();
    };
    return (
        <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, marginTop: 13 }}>
                <Text style={{ fontSize: 18, fontWeight: '500', color: '#1B1A57' }}>Recent Chats</Text>
                <IonIcons name='search' size={24} />
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 24, alignItems: 'center' }}>
                <View style={{
                    height: 26, width: 62, backgroundColor: '#2F80ED', borderRadius: 4, marginLeft: 16, alignItems: 'center', justifyContent: 'center'
                }}>
                    <Text style={{ fontSize: 12, fontWeight: 500, color: '#fff' }}>All chats</Text>
                </View>
                <View style={{
                    height: 26, width: 62, backgroundColor: 'white', marginLeft: 24, borderRadius: 4, alignItems: 'center', justifyContent: 'center'
                }}>
                    <Text style={{ fontSize: 12, fontWeight: 500, color: 'grey' }}>Personal</Text>
                </View>
                <View style={{ height: 26, width: 62, backgroundColor: 'white', marginLeft: 30, borderRadius: 4, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 12, fontWeight: 500, color: 'grey' }}>Work</Text>
                </View>
                <View style={{ height: 26, width: 62, backgroundColor: 'white',marginLeft: 30, borderRadius: 4, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 12, fontWeight: 500, color: 'grey' }}>Groups</Text>
                </View>
            </View>
            <FlatList
                data={users}
                renderItem={({ item }) => {
                    return (
                        <ChatBox
                            id={item.id}
                            imgSource={item.imageSource}
                            name={item.name}
                            message={item.message}
                            time={item.time}
                            unseenMessage={item.unseenMessage}
                            available={item.available}
                            away={item.away}
                            offline={item.offline}
                        />
                    )
                }
                }
            />
            <TouchableOpacity onPress={onOpen}
                style={{ alignSelf: 'flex-end', alignItems: 'center', borderRadius: 90, backgroundColor: '#2F80ED', height: 56, width: 56, justifyContent: 'center', marginBottom: 30, marginRight: 24 }}>
                <Message />
            </TouchableOpacity>

            <Modalize ref={modalizeRef}
                snapPoint={390}
                adjustToContentHeight={true}
                closeSnapPointStraightEnabled={false}
                scrollViewProps={{ showsVerticalScrollIndicator: false }}
                rootStyle={{ borderRadius: 16 }}
            >
                <CreateCategory />
            </Modalize>
        </>
    )
}

export default (RecentChats);