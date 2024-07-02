import { View, Text } from 'react-native'
import React from 'react'
import IonIcons from 'react-native-vector-icons/Ionicons';
const Channels = () => {
  return (
    <View>
      <View style={{paddingTop:12,paddingHorizontal:16,paddingBottom:12,flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{ fontSize:14,fontWeight:500,color:'#1B1A57'}}>
                #Chanels
            </Text>  
            <View style={{flexDirection:'row'}}>
                <IonIcons    style={{marginRight:24}}name='chevron-down-outline' color={'#2F80ED'}/> 
                <IonIcons name='ellipsis-vertical' color={'#2F80ED'}/>
            </View>
        </View>
    <View style={{backgroundColor:'#E1E9FD'}}>
      <Text style={{fontSize:12,fontWeight:500,color:'#2F80ED',padding:16}}> #Genral</Text>
    </View>
    <View style={{}}>
      <Text style={{fontSize:12,fontWeight:500,color:'#4F5E7B',padding:16}}> # Design Team</Text>
    </View>
    <View style={{}}>
      <Text style={{fontSize:12,fontWeight:500,color:'#4F5E7B',padding:16}}># UX Writer</Text>
    </View>
    <View style={{}}>
      <Text style={{fontSize:12,fontWeight:500,color:'#4F5E7B',padding:16}}># Projects</Text>
    </View>
    </View>
    
  )
}

export default Channels