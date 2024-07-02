import { View, Text ,Image } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'

const CreateCategory = () => {
  return (
    <View style={{padding:16}}>
    
      <Text style={{fontSize:18,fontWeight:500,color:'#1B1A57'}}>
        Create a new category
      </Text>
      <View style={{flexDirection:'row'}}>
            <View
            style={{
                width:265,
                borderBottomColor: '#2F80ED',
                borderBottomWidth: 2,
                height:50
            }}>
            <TextInput
            placeholder='Workmates'
                editable
                maxLength={20}
                placeholderTextColor= 'black'
                style={{}}
            />
            </View>
            <View style={{alignItems:'center',justifyContent:'center',height:26,
                width:61,backgroundColor:'#2F80ED',marginLeft:17,borderRadius:4,marginTop:20}}>
                <Text style={{fontSize:14,fontWeight:500,color:'#fff'}}>Create</Text>
            </View>            
      </View>
        
      <Text style={{marginTop:24,fontSize:12,fontWeight:700,color:'<Text>Suggested:</Text>'}}>Suggested:</Text>
      <View style={{flexDirection:'row'}}>
            <View style={{alignItems:'center',justifyContent:'center',height:24,
                width:97,backgroundColor:'#2F80ED',borderRadius:4,marginTop:10}}>
                <Text style={{fontSize:12,fontWeight:500,color:'#fff'}}>Personal chats</Text>
            </View>
            <View style={{alignItems:'center',justifyContent:'center',height:24,
                width:58,backgroundColor:'#2F80ED',marginLeft:16,borderRadius:4,marginTop:10}}>
                <Text style={{fontSize:12,fontWeight:500,color:'#fff'}}>Groups</Text>
            </View>
            <View style={{alignItems:'center',justifyContent:'center',height:24,
                width:94,backgroundColor:'#2F80ED',marginLeft:16 ,borderRadius:4,marginTop:10}}>
                <Text style={{fontSize:12,fontWeight:500,color:'#fff'}}>Organizations</Text>
            </View>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{marginTop:32,fontSize:12,fontWeight:700,}}>Included chats (3)</Text>
        <Text style={{color:'#2F80ED',fontSize:12,fontWeight:700,marginTop:32}}>+ Add chats</Text>
      </View>
      <View style={{}}>
            <View style={{flexDirection:'row',padding:12}}>
                <Image style={{height:40,width:40}}source={require('../images/image1.png')}/>
                <Text style={{marginLeft:16,marginTop:9,fontSize:14,fontWeight:400,color:'#1B1A57'}}>Darlene Steward</Text>
            </View>
            <View style={{flexDirection:'row',padding:12}}>
                <Image style={{height:40,width:40}}source={require('../images/Image2.png')}/>
                <Text style={{marginLeft:16,marginTop:9,fontSize:14,fontWeight:400,color:'#1B1A57'}}>Darlene Steward</Text>
            </View>
            <View style={{flexDirection:'row',padding:12
         }}>
                <Image style={{height:40,width:40}}source={require('../images/Image3.png')}/>
                <Text style={{marginLeft:16,marginTop:9,fontSize:14,fontWeight:400,color:'#1B1A57'}}>Darlene Steward</Text>
            </View>
      </View>
    </View>
  )
}

export default CreateCategory