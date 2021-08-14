
import React from 'react';
import {TouchableOpacity, View,Image,Text} from 'react-native'
import signup from './screens/SignUp/signup';
import signin from './screens/SignIn/signin';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {LogBox } from 'react-native';
import TabNavigator from './components/MainTabNavigator';
import StudentLoanForm from './screens/studentLoan/studentLoanForm';
import MessagesScreen from './screens/Message/Message';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StdScholarship from './screens/StudentScholarShip/StudentScholarshipForm';
import LoanStatement from './screens/LoanStatementDocument/LoanStatement';
import StudentTopTab from './components/StudentScholarShipTopTab';
import PayOff from './screens/PayOff/PayOff';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const App=()=>{
  LogBox.ignoreLogs(['Reanimated 2']);
  
  const Stack=createStackNavigator();
  

  return(
     <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='SignUp' component={signup} options={{title:'HELSB',headerStyle:{
            backgroundColor:'#4953CF'
          },headerTintColor:'#fff',headerTitleStyle:{
            marginLeft:10
          }}}/>

          <Stack.Screen name='Signin' component={signin} options={{title:'HELSB',headerStyle:{
            backgroundColor:'#4953CF',
          },headerTintColor:'#fff',headerLeft:()=>{

          },headerTitleStyle:{
            marginLeft:10
          }}}/>
           <Stack.Screen name='Drawer Screen' component={TabNavigator} options={{headerShown:false}}/>
           <Stack.Screen name='Student Loan' component={StudentLoanForm} options={{headerTitleAlign:'center',headerTitleStyle:{
                color:'#4953CF'
            },headerStyle:{
                height:70
            }}}/>
            
            
            <Stack.Screen name='Student Scholarship' component={StdScholarship} options={{headerTitleAlign:'center',headerTitleStyle:{
                color:'#4953CF'
            },headerStyle:{
                height:70
            }}}/>

            
            <Stack.Screen name='Loan Statement' component={LoanStatement} options={{headerTitleAlign:'center',headerTitleStyle:{
                color:'#4953CF'
            },headerStyle:{
                height:70
            }}}/>


          <Stack.Screen name='ScholarShip' component={StudentTopTab} options={{headerTitleAlign:'center',headerTitleStyle:{
                color:'#4953CF'
            },title:'Student Scholarship',headerStyle:{
                height:70
            }}}/>

<Stack.Screen name='Repayment' component={PayOff} options={{headerTitleAlign:'center',headerTitleStyle:{
                color:'#4953CF'
            },title:'Repayment',headerStyle:{
                height:70
            },headerRight:()=>{
              return(
                <FontAwesome name={'cog'} size={25} style={{marginRight:20}}/>
              )
            }}}/>

           <Stack.Screen name='Message' component={MessagesScreen} options={({route}) => ({
              headerTitle:()=>{
                return(
                  <View style={{flexDirection:'row',alignContent:'space-between',alignItems:'center'}}>
                  <Image source={require('./images/pic4.jpg')} style={{borderRadius:35/2,width:35,height:35}}/>
                  <Text style={{fontSize:18,fontWeight:'bold',marginLeft:5}}>{route.params.userName}</Text>
                </View>
                )
                
              },
              headerRight:()=>{
                return(
                  <View style={{flexDirection:'row',alignContent:'space-between',alignItems:'center'}}>
                    <TouchableOpacity>
                        <MaterialIcons name={'video-call'} size={25} color={'black'} style={{padding:5}}/>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <MaterialIcons name={'call'} size={22} color={'black'} style={{padding:5}}/>
                    </TouchableOpacity>
                  
                    <TouchableOpacity>
                        <MaterialIcons name={'more-vert'} size={22} color={'black'} style={{padding:5}}/>
                    </TouchableOpacity>
                 
                </View>

                )              
              }
            })}/>
        </Stack.Navigator>
     </NavigationContainer>
  )
}

export default App;
