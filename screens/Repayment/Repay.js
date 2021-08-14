import React,{useState} from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  ScrollView
} from 'react-native';
import styles from './style';
import Repayment from '../../components/RepaymentHistory/RepaymentHistory';

const RepayScreen=()=>{
    return(
        <View style={styles.repayContainer}> 
            <ScrollView>
                <Repayment upTextColor={'#FF6C00'} upBackColor={'#FED8B1'} loan={'2100'} date={'8 March 2020'} paymentMethod={'Mobile Number'}/>
                <Repayment upTextColor={'#FF6C00'} upBackColor={'#FED8B1'} loan={'3000'} date={'8 March 2020'} paymentMethod={'Bank Transfer'}/>
            </ScrollView>
        </View>
    )
}

export default RepayScreen;