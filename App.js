import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import SearchStory from './screens/SearchStory'
import WriteStory from './screens/WriteStory'

export default class App extends React.Component {
  
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Write: {screen: WriteStory},
  Search: {screen: SearchStory},
},
{
  defaultNavigationOptions:({navigation})=>({
   tabBarIcon:({})=>{
     const routeName=navigation.state.routeName
     if (routeName==="Write"){
      return(
        <Image source={require('./assets/write.png') } style={{width:50, height:20}} />
      )
     }
     else if (routeName==="Search"){
      <Image source={require('./assets/read.png') } style={{width:50, height:20}} />
     }
    
   } 
  })
}



);

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
