import React,{useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles,{upperHalfTextComponent} from './style'

const Repayment=({upTextColor,upBackColor,date,loan,paymentMethod})=>{


    return(
        <View style={styles.repaymentComponent}>
            <View style={styles.upperView}>
                <View style={styles.upperLeftView}>
                <Text style={upperHalfTextComponent(upTextColor,upBackColor)}>
                                Student Loan
                            </Text>
                </View>
                <View style={styles.upperRightView}>
                    <View style={styles.dateConatiner}>
                        <Text style={styles.date}>
                            {date}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.lowerView}>
                <View style={styles.lowerLeftView}>
                    <View style={styles.TextContainer}>
                    <Text style={styles.loanText}>
                        ZMK
                        <Text style={styles.loan}> {loan}</Text>
                    </Text>
                    </View>
                    
                </View>
                <View style={styles.lowerRightView}>
                    <FontAwesome name={'dollar'} size={17} style={styles.icon}/>
                    <Text>
                        {paymentMethod}
                    </Text>
                </View>


            </View>
        </View>
    )
}



export default Repayment;