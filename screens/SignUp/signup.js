import React,{useState,useEffect} from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,ScrollView
} from 'react-native';
import styles from '../SignUp/style';
import Svg, { Path, Circle, Line } from 'react-native-svg';
import { Dimensions } from 'react-native';


const signup=({navigation})=>{
  const [number,setNumber]=useState('')
  const [email,setEmail]=useState('')
  const [is,setId]=useState('')


  const height=Dimensions.get('screen').height;
  const width=Dimensions.get('screen').width;

  const apiData=()=>{
    fetch('https://schema.postman.com/json/collection/v2.0.0/collection.json')
    .then((res)=>{
      console.log(res['_bodyInit'])
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const [isLandScape,setLandscape]=useState(false)
  const[widthCurve,setCurve]=useState(Dimensions.get('screen').width+90)


  //////Use Effect Hook
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


  ////Code of Signup Screen
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
          <Text style={{marginLeft:20,color:'#fff',fontWeight:'bold',fontSize:40,position:'absolute',top:height*0.18}}>
              SignUP
            </Text>
        </View>
          
          

          <KeyboardAvoidingView style={styles.inputContainer}>

            
            <View style={styles.inputTextWrapper}>
                <Text style={styles.inputHeading}>
                  PHONE NUMBER
                </Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(val)=>{
                      setNumber(val)
                    }}
                />
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
                  NATIONAL ID
                </Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(val)=>{
                      setId(val)
                    }}
                />
            </View>
          </KeyboardAvoidingView>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={()=>{
              // console.log(height)
              // console.log(styles.getTitleHeight(height['height']))
              apiData()
              // navigation.navigate('Header')
            }}>
              <Text style={styles.buttonText}>
                REGISTER
              </Text>
            </TouchableOpacity>
            <View style={styles.forgetConatiner}>
            <Text style={styles.forget}>
              Already have account?
            </Text>
            <TouchableOpacity style={styles.forget} onPress={()=>{
              navigation.navigate('Signin')
            }}>
              <Text style={styles.forget,styles.signupbutton}> Signin</Text>
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


export default signup;


