import React,{useState} from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image
} from 'react-native';

import styles from '../SignIn/style';

const signin=({navigation})=>{
  const [number,setNumber]=useState('')
  const [email,setEmail]=useState('')
  const [is,setId]=useState('')
  const [height,setHeight]=useState('')
    return(
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.header} onLayout={(event) => {
                 setHeight(event.nativeEvent.layout) }}>
               <View style={[styles.triangleCornerTopRight,styles.triangleCorner]} />
            <View style={[styles.triangleRightCorner,styles.triangleBottomRight]}/>
            
            <View style={styles.circle}/>
            
            <View style={styles.secondOval}/>
            <View style={styles.secondCircle}/>
            <View style={styles.thirdCircle}/>
            <View style={styles.fourthCircle}/>
            <View style={styles.fifthCircle}/>
              <Text style={styles.dashboard}>
                Dashboard
              </Text>
              <Text style={styles.SignInTitle}>
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
                        setId(val)
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


export default signin;