/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import Navigator from './Navigator';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import FsdBookmark from './component/Bookmark';


const App=()=>{
  return(
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Navigator/>
    </GestureHandlerRootView>
  )
}


export default App;
