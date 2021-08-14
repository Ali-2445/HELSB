import React from 'react';
import {View} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen/Chat';
import DepartmentScreen from '../screens/Department/Department';
import AlertScreen from '../screens/Alerts/Alerts';


const ChatTopTabNavigator=()=>{
    const Tab = createMaterialTopTabNavigator();
    return(
        <Tab.Navigator tabBarPosition={'top'} >
            <Tab.Screen name='Direct' component={ChatScreen} options={{tabBarActiveTintColor:'blue',tabBarInactiveTintColor:'black',tabBarIndicatorStyle:{
                backgroundColor:'#fff',
            },tabBarPressColor:'#fff',tabBarBadge:()=>{
                return(
                    <View style={{backgroundColor:'red',height:6,width:6,borderRadius:6/2,position:'absolute',right:30,top:13}}>

                    </View>
                )
            }}}/>

            <Tab.Screen name='Department' component={DepartmentScreen} options={{tabBarActiveTintColor:'blue',tabBarInactiveTintColor:'black',tabBarIndicatorStyle:{
                backgroundColor:'#fff'
            },tabBarPressColor:'#fff',tabBarBadge:()=>{
                return(
                    <View style={{backgroundColor:'red',height:6,width:6,borderRadius:6/2,position:'absolute',right:10,top:13}}>

                    </View>
                )
            }}}/>

            <Tab.Screen name='Alert' component={AlertScreen} options={{tabBarActiveTintColor:'blue',tabBarInactiveTintColor:'black',tabBarIndicatorStyle:{
                backgroundColor:'#fff'
            },tabBarPressColor:'#fff',}}/>
            
        </Tab.Navigator>
    )
}

export default ChatTopTabNavigator;