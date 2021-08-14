import React,{useState} from 'react';
import {
  View,
  Image,
  ScrollView
} from 'react-native';
import styles from './style';
import FaqComponent from '../../components/FAQSComponent/FrequentlyAskedComponent';

const FaqScreen=()=>{

    return(
        <View style={styles.container}>
            <ScrollView>
            <Image source={require('../../images/FAQ.png')} style={styles.headerImage} resizeMode={'contain'}/>
            <View style={styles.buttonContainer}>
                <FaqComponent btnText={'Who is HELSB'} hiddenText={'The Higher Education Loans and Scholarships Board (HELSB) is a quasi-Government institution of the Republic of Zambia responsible for the granting, administration, investment, payment and recovery of Loans; provide for the administration and granting of scholarships; facilitate the mobilisation of financial resources for loans and scholarships. HELSB was established under the Act of Parliament No. 31 of 2016. It replaced the Bursaries Committee'}/>
                <FaqComponent btnText={'When was HELSB established?'}/>
                <FaqComponent btnText={'Is HELSB a Private or Government Institution?'}/>
                <FaqComponent btnText={'Where are the offices for HELSB located?'}/>
                <FaqComponent btnText={'What is your postal address? '}/>
                <FaqComponent btnText={'What are your contact detail?'}/>
                <FaqComponent btnText={'Is HELSB the same as Bursary’s Committee (BC)?'}/>
            </View>
            
            </ScrollView>
        </View>
    )
}

export default FaqScreen;