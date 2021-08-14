import React,{useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles,{ upperHalfTextComponent } from './styles'


const OutStandingLoanComponent=({upBackColor,upTextColor,loan,date,days,navigation})=>{

    

    return(
        <View style={styles.Loancomponent}>
            <View style={styles.upperView}>
                <View style={styles.upperLeftView}>
                <Text style={upperHalfTextComponent(upTextColor,upBackColor)}>
                                Student Loan
                            </Text>
                            <View style={styles.tickIcon}>

                                <FontAwesome name={'check-circle'} size={22} color={'green'}/>
                            </View>
                </View>
                <View style={styles.upperRightView}>
                    <View style={styles.dateConatiner}>
                        <Text style={styles.date}>
                            {date}
                            <Text style={styles.days}>
                                 ({days} Days)
                            </Text>
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
                    <TouchableOpacity style={styles.button} onPress={()=>console.log('edit')}>
                        <Text style={styles.buttonText}>Edit</Text>
                    </TouchableOpacity>
    
                    <TouchableOpacity style={styles.button} onPress={()=>{
                        navigation.navigate('Repayment')
                    }}>
                        <Text style={styles.buttonText}>Pay Off</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </View>
    )
}




export default OutStandingLoanComponent;