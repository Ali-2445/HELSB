import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OutStandingScreen from '../screens/OutstandingLoan/OutStanding';
import DashboardScreen from '../screens/Dashboard/DashboardScreen';
import RepayScreen from '../screens/Repayment/Repay';

const TopTabNavigator=()=>{
    const Tab = createMaterialTopTabNavigator();
    return(
        <Tab.Navigator tabBarPosition={'top'}>
            <Tab.Screen name='Dashboard' component={DashboardScreen} options={{tabBarActiveTintColor:'blue',tabBarInactiveTintColor:'black'}}/>
            <Tab.Screen name='Outstanding Loan' component={OutStandingScreen} options={{tabBarActiveTintColor:'blue',tabBarInactiveTintColor:'black'}}/>
            <Tab.Screen name='Repayment History' component={RepayScreen} options={{tabBarActiveTintColor:'blue',tabBarInactiveTintColor:'black'}}/>
        </Tab.Navigator>
    )
}

export default TopTabNavigator;