import React,{useState} from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import styles from '../SignUp/style';

const signup=({navigation})=>{
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
            
              <Text style={styles.SignUpTitle}>
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
                console.log(height)
                console.log(styles.getTitleHeight(height['height']))
              }}>
                <Text style={styles.buttonText}>
                  REGISTER
                </Text>
              </TouchableOpacity>
              <View style={styles.forgetConatiner}>
              <Text style={styles.forget}>
                Already have account?
              </Text>
              <TouchableOpacity onPress={()=>{
                navigation.navigate('Signin')
              }}>
                <Text style={styles.forget,styles.signupbutton}> Signin</Text>
              </TouchableOpacity>
              </View>
            </View>
        </KeyboardAvoidingView>
    )
}


export default signup;