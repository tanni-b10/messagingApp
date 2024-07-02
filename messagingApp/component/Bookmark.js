import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicon from 'react-native-vector-icons/Ionicons';
import Member from './Member';

const bookmarkstext = [
    {
        id: '1',
        text: 'The next thing we will consider is how to create our own kitchen set in our office!..'
    },
    {
        id: '2',
        text: 'Pls keep a note that we will take a vacation on next weekend. Make sure you join the eve...'
    },
    {
        id: '3',
        text: 'The event will be held in London. Sunday, 26th of April 2020.'
    }
]
    
const data3 = [
    {
        id: '1',
        name: 'Adina Nurrahma',
        admin: 'You',
        image: require('../images/settingImage.png'),
    },
    {
        id: '2',
        name: 'Mike Mazowski',
        admin: 'Admin',
        image: require('../images/fsd2.png'),
    },
    {
        id: '3',
        name: 'Marvin Robertson',
        admin: 'Admin',
        image: require('../images/fsd3.png'),
    },
    {
        id: '4',
        name: 'Gregory Robertson',
        image: require('../images/fsd4.png'),
    },
    {
        id: '5',
        name: 'Samuel Witnessa',
        image: require('../images/fsd5.png'),
    },
    {
        id: '6',
        name: 'Bambang Wijayanto',
        image: require('../images/fsd6.png'),
    },
    {
        id: '7',
        name: 'Sururi Mandatson',
        image: require('../images/fsd7.png'),
    },
    {
        id: '8',
        name: 'Michael Robbin',
        image: require('../images/fsd8.png'),
    },
    {
        id: '9',
        name: 'Jackobs Stewart',
        image: require('../images/fsd9.png'),
    },
    {
        id: '10',
        name: 'Anastasia Redborn',
        image: require('../images/fsd10.png'),
    },
    {
        id: '11',
        name: 'Fuetla Lamalida',
        image: require('../images/fsd11.png'),
    },
    {
        id: '12',
        name: 'Kimini Wildjackson',
        image: require('../images/fsd12.png'),
    }
]
const Bookmark = () => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 16 }} nestedScrollEnabled={true}>
            <FlatList
                data={bookmarkstext}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={{ marginTop: 24, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ paddingRight: 21, fontSize: 14, fontWeight: 400, color: '#4F5E7B', flex: 1 }}>{item.text}</Text>
                            <Ionicon name='chevron-forward' size={24} color={'#4F5E7B'} />
                        </View>
                    )
                }}
            />

            <TouchableOpacity activeOpacity={0.8} style={{ backgroundColor: '#F7F7F7', borderRadius: 8, justifyContent: 'center', alignItems: 'center', height: 40, marginTop: 24 }}>
                <Text style={{ fontSize: 12, fontWeight: 500, color: '#2D9CDB' }}>    See more      </Text>
            </TouchableOpacity>

            <View style={{
                marginVertical: 24, borderWidth: 1, borderRadius: 8, borderColor: '#EDEDED', flexDirection: 'row',
                paddingHorizontal: 16, alignItems: 'center', flex: 1
            }}>
                <Ionicon name='chatbox' size={24} color={'#2F80ED'} />
                <Text style={{ paddingLeft: 16, paddingVertical: 15, fontSize: 12, fontWeight: 400, color: '#1B1A57', flex: 1 }}>
                    4 Channels
                </Text>
                <Ionicon name='chevron-down' />
            </View>

            <View style={{
                flexDirection: 'row', borderWidth: 1, borderRadius: 8, borderColor: '#EDEDED', paddingHorizontal: 16,
                alignItems: 'center', flex: 1
            }}>
                <Ionicon name='people' size={24} color={'#2F80ED'} />
                <Text style={{ fontSize: 12, fontWeight: 400, color: '#1B1A57', padding: 16, }}>
                    12 peoples
                </Text>
                <View style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row' }}>
                    <Ionicon name='person-add-outline' size={24} color={'#2F80ED'} style={{ marginRight: 24 }} />
                    <Ionicon name='search' size={24} color={'#2F80ED'} />
                </View>
            </View>

            <FlatList
                data={data3}
                keyExtractor={item => item.id}
                style={{ marginTop: 16 }}
                renderItem={({ item }) => {
                    return (
                        <Member text={item.name} detail={item.admin} image={item.image} />
                    )
                }}
                ListFooterComponent={() => {
                    return (
                        <View style={{ height: 30 }} />
                    )
                }}
            />

        </ScrollView>
    )
}

export default Bookmark