import { View, Text ,Image} from 'react-native'
import React from 'react'

const CallHistory = () => {
  return (
    <View>
      <View style={{flexDirection:'row', width: '100%',height: 64,backgroundColor:'#fff',borderRadius: 8,padding:16,paddingTop:20}}>
            <View style={{paddingRight:8}}>
                <Image style={{
                padding:20,
                height: 48,
                width: 48,
            }}source={require('../images/image1.png')}/>
            </View>
            <View style={{flex:1}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:4,paddingHorizontal:8}}>
                    <Text style={{fontSize:12,fontWeight:400}}>Call history</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:8,paddingHorizontal:8}}>
                    <Text style={{fontSize:14,fontWeight:500,color:'#1B1A57'}}>Darlene Steward</Text>
                </View>
            </View>
            <Text>dots</Text>
        </View>    
    <View style={{flexDirection:'row',backgroundColor:'white',marginTop:28,padding:8,margin:8,}}>
        <View>
            <Text>icon</Text>
        </View>
        <View style={{marginLeft:8}}>
            <Text style={{color:'#1B1A57',fontSize:12,fontWeight:400}}>3:30 AM</Text>
            <Text style={{color:'#4F5E7B',fontSize:12,fontWeight:400}}>33min   12.3MB</Text>
        </View>
        <View>
            <Text>
                vcicon
            </Text>
        </View>
    </View>


    <View style={{flexDirection:'row',backgroundColor:'white',marginTop:4,padding:8,margin:8,}}>
        <View>
            <Text>icon</Text>
        </View>
        <View style={{marginLeft:8}}>
            <Text style={{color:'#1B1A57',fontSize:12,fontWeight:400}}>Yesterday, 07.53 AM</Text>
            <Text style={{color:'#4F5E7B',fontSize:12,fontWeight:400}}>00:20   47kb</Text>
        </View>
        <View>
            <Text>
                vcicon
            </Text>
        </View>
    </View>

    <View style={{flexDirection:'row',backgroundColor:'white',marginTop:4,padding:8,margin:8,}}>
        <View>
            <Text>icon</Text>
        </View>
        <View style={{marginLeft:8}}>
            <Text style={{color:'#1B1A57',fontSize:12,fontWeight:400}}>July 07, 01.30 AM</Text>
        </View>
        <View>
            <Text>
                vcicon
            </Text>
        </View>
    </View>

    <View style={{flexDirection:'row',backgroundColor:'white',marginTop:4,padding:8,margin:8,}}>
        <View>
            <Text>icon</Text>
        </View>
        <View style={{marginLeft:8}}>
            <Text style={{color:'#1B1A57',fontSize:12,fontWeight:400}}>July 05, 07.25 AM</Text>
            <Text style={{color:'#4F5E7B',fontSize:12,fontWeight:400}}>4min  230kb</Text>
        </View>
        <View>
            <Text>
                vcicon
            </Text>
        </View>
    </View>


    <View style={{flexDirection:'row',backgroundColor:'white',marginTop:4,padding:8,margin:8,}}>
        <View>
            <Text>icon</Text>
        </View>
        <View style={{marginLeft:8}}>
            <Text style={{color:'#1B1A57',fontSize:12,fontWeight:400}}>July 05, 03.30 AM</Text>
        </View>
        <View>
            <Text>
                vcicon
            </Text>
        </View>
    </View>      
    </View>
  )
}
export default CallHistory