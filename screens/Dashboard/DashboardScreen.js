import React,{useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import styles from './style';
import * as Progress from 'react-native-progress';
import ComponentScholarShip from '../../components/ScholarShipComponent/ScholarshipComponent';
import { IncompleteApplication } from '../../components/ScholarShipComponent/ScholarshipComponent';


const DashboardScreen=({navigation})=>{
    const[width,setWidth]=useState('');

    return(
        <View style={styles.container}>
            <View style={styles.progressbarcontainer} onLayout={(event) => {
                 setWidth(event.nativeEvent.layout) }}>
                <Text style={styles.bartext}>
                    Your profile complete ratio : <Text style={styles.barProgressText}> 80%</Text>
                </Text>
                <Progress.Bar progress={0.8} style={styles.progressBar} color={'green'} width={310}/>
            </View>
            <View style={styles.LoanContainer}>
                <TouchableOpacity style={styles.totalLoan} onPress={()=>{
                        console.log(width['width'])
                    }}>
                    <Text style={styles.upperTextLoan}>TOTAL LOAN</Text>
                    <Text style={styles.buttonText}>ZMK 10,000</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.paid}>
                    <Text style={styles.upperTextPaid}>PAID</Text>
                    <Text style={styles.buttonText}>ZMK 3,000</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.LoanAndScholarshipContainer}>
                <View style={styles.dc}>
                <Text style={styles.landSHead}>
                    LOAN & SCHOLARSHIPS
                </Text>
                <View style={styles.documentIconView}>
                    <TouchableOpacity onPress={()=>{
                        console.log('Document open')
                        navigation.navigate('Loan Statement')
                    }}>
                    <Image source={require('../../images/documentIcon.jpg')} style={styles.documentIcon}/>
                    </TouchableOpacity>
                </View>
                </View>
                <View style={styles.scholarshipComponentsView}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <ComponentScholarShip sideColor={'green'} upBackColor={'lightgreen'} upTextColor={'green'} upText={'SCHOLARSHIP'} upDate={'09/08/21'} uni={'CHINA SCHOLARSHIP'} navigation={navigation}/>
                        <ComponentScholarShip sideColor={'#FF6C00'} upBackColor={'#FED8B1'} upTextColor={'#FF6C00'} upText={'STUDENT LOAN'} upDate={'07/08/2021'} uni={'MUKUBA UNIVERSITY'} navigation={navigation}/>                    
                        <IncompleteApplication/>
                        <ComponentScholarShip sideColor={'#FF6C00'} upBackColor={'#FED8B1'} upTextColor={'#FF6C00'} upText={'STUDENT LOAN'} upDate={'07/08/2021'} uni={'MUKUBA UNIVERSITY'} navigation={navigation}/>
                        <ComponentScholarShip sideColor={'green'} upBackColor={'lightgreen'} upTextColor={'green'} upText={'STUDENT LOAN'} upDate={'09/08/21'} uni={'CHINA SCHOLARSHIP'} navigation={navigation}/>
                    </ScrollView>
                </View>
            </View>
            
        </View>
    )
}

export default DashboardScreen;