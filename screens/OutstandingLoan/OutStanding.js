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
import OutStandingLoanComponent from '../../components/OutStandingLoan/outstandingLoanComponent';

const OutStandingScreen=({navigation})=>{
    return(
        <View style={styles.loanContainer}>
            <ScrollView>
                <OutStandingLoanComponent upTextColor={'#FF6C00'} upBackColor={'#FED8B1'} loan={'1000.00'} date={'05 Jun 2020'} days={'7'} navigation={navigation}/>
                <OutStandingLoanComponent upTextColor={'#FF6C00'} upBackColor={'#FED8B1'} loan={'1500.00'} date={'06 Jun 2020'} days={'8'} navigation={navigation}/>
                <OutStandingLoanComponent upTextColor={'#FF6C00'} upBackColor={'#FED8B1'} loan={'3000.00'} date={'07 Jun 2020'} days={'9'} navigation={navigation}/>
            </ScrollView>
        </View>
    )
}

export default OutStandingScreen;