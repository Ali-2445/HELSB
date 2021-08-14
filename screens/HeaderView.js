import React,{useState} from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  StyleSheet
} from 'react-native';
const HeaderView = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.triangleCornerTopRight,styles.triangleCorner]} />
            <View style={[styles.triangleRightCorner,styles.triangleBottomRight]}/>
            
            <View style={styles.circle}/>
            <View style={styles.oval}/>
            <View style={styles.secondOval}/>
            <Text style={styles.signUpTitle}>
                SignUp
            </Text>
        </View>
        
    );
  };
  
const styles= StyleSheet.create({
    container:{
        height:186.5,
        justifyContent:'center',
        backgroundColor:'#4953CF'
        // alignItems:'center'
    },
    triangleCorner: {
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderRightWidth: 130,
        borderTopWidth: 130,
        borderRightColor: "transparent",
        borderTopColor: "#fff",
        position:'absolute',
        bottom:0
      },
    triangleCornerTopRight: {
        transform: [{ rotate: "270deg" }],
      },
      triangleBottomRight:{
          transform:[{rotate:'180deg'}]
      },
      circle:{
          height:190,
          width:190,
          borderRadius:95,
          backgroundColor:'#4953CF',
          position:'absolute',
          bottom:0,
          marginLeft:-10
          
      },
      triangleRightCorner:{
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderRightWidth: 250,
        borderTopWidth: 170,
        borderRightColor: "transparent",
        borderTopColor: "#fff",
        position:'absolute',
        bottom:0,
        right:0
      },
      oval:{
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: "#fff",
        transform: [{rotate:'220deg'},{scaleY:2.2}],
        position:'absolute',
        right:10
      },
      secondOval:{
        width: 82,
        height: 90,
        borderRadius: 16,
        backgroundColor: "#fff",
        transform: [{rotate:'230deg'},{scaleY:2.5}],
        position:'absolute',
        right:60,
        bottom:20,
        borderTopStartRadius:80,
        borderTopEndRadius:10
      },
      thirdOval:{
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: "#fff",
        transform: [{rotate:'220deg'},{scaleY:2}],
        position:'absolute',
        right:90,
        bottom:40
      },
      signUpTitle:{
        marginLeft:20,
        color:'#fff',
        fontWeight:'bold',
        fontSize:40,
        position:'absolute',
        bottom:30
      }
  });

  export default HeaderView;