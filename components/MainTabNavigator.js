import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/Profile/Profile';
import FaqScreen from '../screens/FrequentlyAsked/Faq';
import Drawer from './MainDrawer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ChatTopTabNavigator from './ChatTopTab';

function TabNavigator(){
    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator>
            <Tab.Screen name='Dashboard' component={Drawer}  options={{headerShown:false,tabBarIcon:({focused})=>{
                return(
                    <MaterialIcons name={'grid-view'} size={25} color={focused?'#4953CF':'#8C8C8C'} />
                )
            },tabBarInActiveTintColor:'#8C8C8C',tabBarActiveTintColor:'#4953CF',tabBarLabelStyle:{
                fontSize:14,fontWeight:'bold'
            }}}/>

            
            <Tab.Screen name='Chat' component={ChatTopTabNavigator} options={{tabBarIcon:({focused})=>{
                return(
                    <FontAwesome name={'comment'} size={25} color={focused?'#4953CF':'#8C8C8C'}/>
                )
            },tabBarInActiveTintColor:'#8C8C8C',tabBarActiveTintColor:'#4953CF',headerTitleAlign:'center',headerRight:()=>{
                return(
                    <FontAwesome name={'plus-circle'} size={25} style={{marginRight:40}} color={'#4953CF'}/>
                )
            },headerStyle:{
                borderWidth:2,borderRightColor:'#fff',borderTopColor:'#fff',borderLeftColor:'#fff'
            },tabBarLabelStyle:{
                fontSize:14,fontWeight:'bold'
            }}}/>


            <Tab.Screen name='Profile' component={ProfileScreen} options={{tabBarIcon:({focused})=>{
                return(
                    <FontAwesome name={'user'} size={25} color={focused?'#4953CF':'#8C8C8C'}/>
                )
            },tabBarInActiveTintColor:'#8C8C8C',tabBarActiveTintColor:'#4953CF',tabBarLabelStyle:{
                fontSize:14,fontWeight:'bold'
            },headerTitleAlign:'center',headerTitleStyle:{
                color:'#4953CF'
            },headerStyle:{
                height:70
            },title:'User Profile'}}/>


            <Tab.Screen name='Help & FAQ' component={FaqScreen} options={{tabBarIcon:({focused})=>{
                return(
                    <FontAwesome name={'question-circle'} size={25} color={focused?'#4953CF':'#8C8C8C'}/>
                )
            },tabBarInActiveTintColor:'#8C8C8C',tabBarActiveTintColor:'#4953CF',tabBarLabelStyle:{
                fontSize:14,fontWeight:'bold'
            },title:'FAQ',headerTitleAlign:'center',headerTitleStyle:{
                color:'#4953CF'
            },headerStyle:{
                height:70
            }}}/>
        </Tab.Navigator>
    )
}
export default TabNavigator;