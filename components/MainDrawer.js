import React from 'react';
import { TouchableOpacity ,Image} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TopTabNavigator from './MaterialTopTabNavigator';

const Drawer=({navigation})=>{
    const Drawer=createDrawerNavigator();
    return(
            <Drawer.Navigator>
       
        <Drawer.Screen name='John Banda' component={TopTabNavigator} options={{headerStyle:{
                        backgroundColor:'#4953CF',
                      },headerTintColor:'#fff',headerRight:()=>{
                        return(
                        <TouchableOpacity onPress={()=>{
                          navigation.navigate('Profile')
                        }}>
                        <Image source={require('../images/user.png')} style={{height:40,width:40,borderRadius:20,marginRight:20}}/>
                      </TouchableOpacity>
                        )
                        
             }}} />
        </Drawer.Navigator>
    )
}

export default Drawer;