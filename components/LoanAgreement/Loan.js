import React,{useState} from 'react';
import {
    TouchableOpacityBase,
  View,Text,TouchableOpacity
} from 'react-native';

import styles from './style';
import { Card, Title, Paragraph} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const LoanAgreement=()=>{

    
    
    return(
       
        <View style={styles.container}>
     
        
            <Card>
                <Card.Content>
                    <Title>Section 2</Title>
                    
                </Card.Content>
            </Card>
        
            <View style={styles.titleContainer}>
                <Title style={{flex:0.9}}>Conditions of the Loan Agreement</Title>
                <View style={{flex:0.1,padding:5,alignItems:'center'}}>
                    <MaterialIcons name={'navigate-next'} size={25} style={{transform:[{rotateZ:'270deg'}]}}/>
                </View>
            </View>
<View style={{backgroundColor:'#fff'}}>
            <View style={styles.TextContainer}>
                <Text style={styles.head}>(a)</Text>
                <Paragraph style={styles.para}>
                The loan is only valid for one academic year/semester but may be renewed on application 
after production of satisfactory academic result
                </Paragraph>
            </View>

            <View style={styles.TextContainer}>
                <Text style={styles.head}>(b)</Text>
                <Paragraph style={styles.para}>
                Part of the loan due to the student shall include payment towards insurance of the loan
                </Paragraph>
            </View>

            <View style={styles.TextContainer}>
                <Text style={styles.head}>(c)</Text>
                <Paragraph style={styles.para}>
                Part of the loan due to the student may be paid to the beneficiary through a bank account 
                as <Text style={{fontWeight:'bold'}}>funds become available</Text>
                </Paragraph>
            </View>

            <View style={styles.TextContainer}>
                <Text style={styles.head}>(d)</Text>
                <Paragraph style={styles.para}>
                Student awarded the loan are expected <Text style={{fontWeight:'bold'}}>to meet any shortfall</Text> not covered by the loan
                </Paragraph>
            </View>

            <View style={styles.TextContainer}>
                <Text style={styles.head}>(e)</Text>
                <Paragraph style={styles.para}>
                Student in receipt of the loan or scholarship provided by the board will not qualify for 
any other offer at the same level of qualification
               </Paragraph>
            </View>


            <View style={styles.TextContainer}>
                <Text style={styles.head}>(f)</Text>
                <Paragraph style={styles.para}>
                The loan is given to obtain one study programme and <Text style={{fontWeight:'bold'}}>it will not be extended</Text> to enable 
students <Text style={{fontWeight:'bold'}}>undertake an additional or higher qualification</Text> than that for which the selection 
was made
               </Paragraph>
            </View>

        <View style={styles.NoteContainer}>
            <View style={styles.note}>
                <Paragraph style={styles.noteFont}>
                        <Text style={styles.bold}>Note:</Text>   Any amount payable to the student is determined by the board at the time of application, and is not negotiable by the student or students union
                </Paragraph>
            </View>
            </View>
        </View>

            
        </View>
    )
}

export default LoanAgreement;

