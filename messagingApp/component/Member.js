import { View, Text, Image} from 'react-native'
import Available from '../assets/available.svg'
import React from 'react'
const Member = ({ text, detail, image }) => {

    return (
        <View>
            <View style={{ flexDirection: 'row', padding: 12, flex: 1, alignItems: "center" }}>
                <Image style={{ height: 40, width: 40 }} source={image} />
                <Available style={{ marginLeft: -8, alignSelf: 'flex-end' }} />
                <Text style={{ marginLeft: 16, fontSize: 14, fontWeight: 500, color: '#1B1A57' }}>{text}</Text>
                {detail && <View style={{ flex: 1, alignItems: 'flex-end', width: 100 }}>
                    <Text style={{ backgroundColor: detail != 'You' ? '#2F80ED' : 'white', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 12, color: detail != 'You' ? 'white' : '#4F5E7B' }}>
                        {detail}
                    </Text>
                </View>}

            </View>
        </View>
    )
}
export default Member