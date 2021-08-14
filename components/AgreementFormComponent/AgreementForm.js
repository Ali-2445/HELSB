import React,{useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native';

import styles from './style';
import { Card, Title, Paragraph} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const AgreementForm=()=>{
    const [name,setName]=useState('');
    const [gender,setGender]=useState('');
    const [email,setEmail]=useState('');
    const [mobile,setMobile]=useState('');
    const [parent,setParent]=useState('');
    const [nation,setNation]=useState('');
    const [dor,setDor]=useState('');
    
    
    return(
       
        <View style={styles.container}>
     
        
            <Card>
                <Card.Content>
                    <Title>Section 1</Title>
                    
                </Card.Content>
            </Card>
        
            <View style={styles.titleContainer}>
                <Title style={styles.title}>Student Loan Agreement Form</Title>
                <View style={styles.icon}>
                    <MaterialIcons name={'navigate-next'} size={25} style={{transform:[{rotateZ:'270deg'}]}}/>
                </View>
            </View>

            <View >
            <Paragraph style={styles.therefore}>An agreement made and entered between the higher Education Loans and Scholarship Board (here in called the loan board) of the first part.</Paragraph>
            <Title style={styles.txtinputHeading}>Student Name :</Title>
            <View style={styles.inputView}>
                <TextInput
                    value={name}
                    style={styles.txtinput}
                    onChangeText={(val)=>{
                        console.log(val)
                        setName(val)
                    }}         
                />
            </View>

            <Title style={styles.txtinputHeading}>Gender :</Title>
            <View style={styles.inputView}>
                <TextInput
                    // label="Email"
                    value={gender}
                    style={styles.txtinput} onChangeText={(val)=>{
                        setGender(val)
                    }}         
                />
            </View>

            <Title style={styles.txtinputHeading}>Email :</Title>
            <View style={styles.inputView}>
                <TextInput
                    // label="Email"
                    value={email}
                    style={styles.txtinput}onChangeText={(val)=>{
                        setEmail(val)
                    }}         
                />
            </View>


            <Title style={styles.txtinputHeading}>Mobile No :</Title>
            <View style={styles.inputView}>
                <TextInput
                    // label="Email"
                    value={mobile}
                    style={styles.txtinput} onChangeText={(val)=>{
                        setMobile(val)
                    }}         
                />
            </View>


            <Title style={styles.txtinputHeading}>Parents/Guardian :</Title>
            <View style={styles.inputView}>
                <TextInput
                    // label="Email"
                    value={parent}
                    style={styles.txtinput} onChangeText={(val)=>{
                        setParent(val)
                    }}         
                />
            </View>


            <Title style={styles.txtinputHeading}>Nationality :</Title>
            <View style={styles.inputView}>
                <TextInput
                    // label="Email"
                    value={nation}
                    style={styles.txtinput}onChangeText={(val)=>{
                        setNation(val)
                    }}         
                />
            </View>


            <Title style={styles.txtinputHeading}>Date Of Registration :</Title>
            <View style={styles.inputView}>
                <TextInput
                    // label="Email"
                    value={dor}
                    style={styles.txtinput} onChangeText={(val)=>{
                        setDor(val)
                    }}         
                />
            </View>
            <Paragraph style={styles.therefore}><Text style={styles.bold}>Now therefore</Text>, in consideration of the undertaking by the student here in contained, the board grants  to the student such a loan by making payment for the following:</Paragraph>
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

export default AgreementForm;

