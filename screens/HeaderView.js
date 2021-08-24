import React,{useState} from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  StyleSheet,Dimensions
} from 'react-native';
import Svg, { Path, Circle, Line } from 'react-native-svg';
const HeaderView = () => {


    return (
        
        <View style={{flex:1}}>
          <Svg style={{flex:0.36}}>
          <Path
                fill='#4953CF'
                d="M0,160 C220,250 230,-15 490,70 L0,-300  Z"
                stroke='#4953CF'
            />
             
          </Svg>
        </View>
        
    );
  };
  


  export default HeaderView;

  // style={[styles.bodyText, { marginLeft: width * 0.055, fontSize: height * 0.030, marginTop: height * 0.01 }]}
  // style={[textStyles, styles.heading]}