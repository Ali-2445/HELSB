import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ApplicationMethod from '../screens/StudentScholarShip/ApplicationMethod';
import StdScholarship from '../screens/StudentScholarShip/StudentScholarshipForm';


const StudentTopTab=()=>{
    const Tab = createMaterialTopTabNavigator();
    return(
        <Tab.Navigator tabBarPosition={'top'} >
            <Tab.Screen name='Student Scholarship' component={StdScholarship} options={{tabBarActiveTintColor:'blue',tabBarInactiveTintColor:'black',tabBarIndicatorStyle:{
                backgroundColor:'#fff',
            },tabBarPressColor:'#fff'}}/>

            <Tab.Screen name='Application Method' component={ApplicationMethod} options={{tabBarActiveTintColor:'blue',tabBarInactiveTintColor:'black',tabBarIndicatorStyle:{
                backgroundColor:'#fff'
            },tabBarPressColor:'#fff'}}/>
            
        </Tab.Navigator>
    )
}

export default StudentTopTab;