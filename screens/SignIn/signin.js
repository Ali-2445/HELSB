import React,{useState,useEffect} from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,ScrollView
} from 'react-native';
import { Dimensions } from 'react-native';
import Svg, { Path, } from 'react-native-svg';
import styles from '../SignIn/style';

const signin=({navigation})=>{
  const [email,setEmail]=useState('')
  const [pass,setPass]=useState('')
  const height=Dimensions.get('screen').height;
  
  const [isLandScape,setLandscape]=useState(false)
  const[widthCurve,setCurve]=useState(Dimensions.get('screen').width+90)

  //// UseEffect Hook
  useEffect(()=>{
   
    Dimensions.addEventListener('change',()=>{
      if(Dimensions.get('screen').height>Dimensions.get('screen').width){
        setCurve(Dimensions.get('screen').width+90)
        setLandscape(false)
  
      }else if(Dimensions.get('screen').height<Dimensions.get('screen').width){
        setCurve(Dimensions.get('screen').width+90)
        setLandscape(true)
      }
    })
    
  },[isLandScape,widthCurve])


  ////Signin screen code

  function Component(){
    return(
        <KeyboardAvoidingView style={styles.container}>
        
            <View style={styles.header}>
          <Svg >
              <Path
                  fill='#4953CF'
                  d={`M0,190 C320,300 230,-15 ${widthCurve},70 L0,-400  Z`}
                  stroke='#4953CF'
              />
              
            </Svg>
            <Text style={{marginLeft:20,color:'#fff',fontSize:16,position:'absolute',top:height*0.16}}>
                Dashboard
              </Text>
              <Text style={{marginLeft:20,color:'#fff',fontWeight:'bold',fontSize:40,position:'absolute',top:height*0.18}}>
                SignIn
              </Text>
          </View>
            <KeyboardAvoidingView style={styles.inputContainer}>
              <TouchableOpacity style={styles.google}>
                <Image source={require('../../images/googlelogo.png')} style={styles.googleLogo}/>
                <Text style={styles.googleText}>Sign in with Google</Text>
              </TouchableOpacity>
              <View style={styles.seperator}>
                <View style={styles.firstSeperator} />
                <Text style={styles.seperatorText}>or</Text>
                <View style={styles.secondSeperator} />
              </View>
              <View style={styles.inputTextWrapper}>
                  <Text style={styles.inputHeading}>
                    EMAIL ADDRESS
                  </Text>
                  <TextInput
                      style={styles.textInput}
                      onChangeText={(val)=>{
                        setEmail(val)
                      }}
                  />
              </View>
              <View style={styles.inputTextWrapper}>
                  <Text style={styles.inputHeading}>
                    PASSWORD
                  </Text>
                  <TextInput
                      style={styles.textInput}
                      secureTextEntry={true}
                      onChangeText={(val)=>{
                        setPass(val)
                      }}
                  />
              </View>
              <View style={styles.forgetPassword}>
              <TouchableOpacity>
                <Text style={styles.forgetPasswordText}>
                Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
            

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={()=>{
                navigation.navigate('Drawer Screen')
              }}>
                <Text style={styles.buttonText}>
                  LOGIN
                </Text>
              </TouchableOpacity>
              <View style={styles.forgetConatiner}>
              <Text style={styles.forget}>
                Don't have an account?
              </Text>
              <TouchableOpacity onPress={()=>{
                navigation.navigate('SignUp')
              }}>
                <Text style={styles.forget,styles.signupbutton}> Sign Up</Text>
              </TouchableOpacity>
              </View>
            </View>
            
        </KeyboardAvoidingView>
    )
  }

  ///Conditional Rendering
  function Cond(){
    if(isLandScape){
      return(
        <ScrollView>
           <Component/>
        </ScrollView>
      )
    }else{
      return(
        <Component/>      
      )
    }
  }
    return(
       <Cond/>
    )
}


export default signin;