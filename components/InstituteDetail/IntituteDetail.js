import React,{useState} from 'react';
import {
  View,
  TextInput
} from 'react-native';

import styles from './style';
import { Card, Title, Paragraph} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const InstituteDetails=()=>{
    const [bank,setBank]=useState()
    const [accountName,setAccountName]=useState()
    const [branch,setBranch]=useState()
    const [accountNo,setAccountNo]=useState()
    const [program,setProgram]=useState()
    const [year,setYear]=useState()
    const [identity,setIdentity]=useState()
    return(
        <View style={styles.container}>
             <Card>
                <Card.Content>
                    <Title>Section 5</Title>
                    
                </Card.Content>
            </Card>
        
            <View style={styles.titleContainer}>
                <Title style={styles.title}>Student Bank Details</Title>
                <View style={styles.icon}>
                    <MaterialIcons name={'navigate-next'} size={25} style={{transform:[{rotateZ:'270deg'}]}}/>
                </View>
            </View>

            <Title style={styles.txtinputHeading}>Bank Name:</Title>
            <View style={styles.inputView}>
                <TextInput
                    value={bank}
                    style={styles.txtinput}
                    onChangeText={(val)=>{
                        console.log(val)
                        setBank(val)
                    }}         
                />
            </View>

            <Title style={styles.txtinputHeading}>Account Name:</Title>
            <View style={styles.inputView}>
                <TextInput
                    value={accountName}
                    style={styles.txtinput}
                    onChangeText={(val)=>{
                        console.log(val)
                        setAccountName(val)
                    }}         
                />
            </View>

            <Title style={styles.txtinputHeading}>Branch Name:</Title>
            <View style={styles.inputView}>
                <TextInput
                    value={branch}
                    style={styles.txtinput}
                    onChangeText={(val)=>{
                        console.log(val)
                        setBranch(val)
                    }}         
                />
            </View>

            <Title style={styles.txtinputHeading}>Account Number:</Title>
            <View style={styles.inputView}>
                <TextInput
                    value={accountNo}
                    style={styles.txtinput}
                    onChangeText={(val)=>{
                        console.log(val)
                        setAccountNo(val)
                    }}         
                />
            </View>

            <View style={styles.titleContainer}>
                <Title style={styles.title}>Student Details</Title>
                <View style={styles.icon}>
                    <MaterialIcons name={'navigate-next'} size={25} style={{transform:[{rotateZ:'270deg'}]}}/>
                </View>
            </View>

            <Title style={styles.txtinputHeading}>Programme of Study:</Title>
            <View style={styles.inputView}>
                <TextInput
                    value={program}
                    style={styles.txtinput}
                    onChangeText={(val)=>{
                        console.log(val)
                        setProgram(val)
                    }}         
                />
            </View>

            <Title style={styles.txtinputHeading}>Year of Study:</Title>
            <View style={styles.inputView}>
                <TextInput
                    value={year}
                    style={styles.txtinput}
                    onChangeText={(val)=>{
                        console.log(val)
                        setYear(val)
                    }}         
                />
            </View>

            <Title style={styles.txtinputHeading}>Student Identity Number:</Title>
            <View style={styles.inputView}>
                <TextInput
                    value={identity}
                    style={styles.txtinput}
                    onChangeText={(val)=>{
                        console.log(val)
                        setIdentity(val)
                    }}         
                />
            </View>
        </View>
    )
}
export default InstituteDetails;