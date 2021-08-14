import React,{useState} from 'react';
import {
  View,
  TextInput
} from 'react-native';

import styles from './style';
import { Card, Title, Paragraph} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const LoanWitness=()=>{
    const [parent,setParent]=useState()
    const [gender,setGender]=useState()
    const [relation,setRelation]=useState()
    const [nationality,setNationality]=useState()
    const [town,setTown]=useState()
    const [province,setProvince]=useState()
    const [address,setAddress]=useState()
    const [email,setEmail]=useState()
    const [phone,setPhone]=useState()
    return(
        <View style={styles.container}>
             <Card>
                <Card.Content>
                    <Title>Section 6</Title>
                    
                </Card.Content>
            </Card>
        
            <View style={styles.titleContainer}>
                <Title style={styles.title}>Loan Witness</Title>
                <View style={styles.icon}>
                    <MaterialIcons name={'navigate-next'} size={25} style={{transform:[{rotateZ:'270deg'}]}}/>
                </View>
            </View>

            <Title style={styles.txtinputHeading}>Name of Parent/Guardian</Title>
            <View style={styles.inputView}>
                <TextInput
                    value={parent}
                    style={styles.txtinput}
                    onChangeText={(val)=>{
                        console.log(val)
                        setParent(val)
                    }}         
                />
            </View>

            <Title style={styles.txtinputHeading}>Gender:</Title>
            <View style={styles.inputView}>
                <TextInput
                    value={gender}
                    style={styles.txtinput}
                    onChangeText={(val)=>{
                        console.log(val)
                        setGender(val)
                    }}         
                />
            </View>

            <Title style={styles.txtinputHeading}>Relationship:</Title>
            <View style={styles.inputView}>
                <TextInput
                    value={relation}
                    style={styles.txtinput}
                    onChangeText={(val)=>{
                        console.log(val)
                        setRelation(val)
                    }}         
                />
            </View>

            <Title style={styles.txtinputHeading}>Nationality:</Title>
            <View style={styles.inputView}>
                <TextInput
                    value={nationality}
                    style={styles.txtinput}
                    onChangeText={(val)=>{
                        console.log(val)
                        setNationality(val)
                    }}         
                />
            </View>

            <Title style={styles.txtinputHeading}>Town/District</Title>
            <View style={styles.inputView}>
                <TextInput
                    value={town}
                    style={styles.txtinput}
                    onChangeText={(val)=>{
                        console.log(val)
                        setTown(val)
                    }}         
                />
            </View>


            <Title style={styles.txtinputHeading}>Province:</Title>
            <View style={styles.inputView}>
                <TextInput
                    value={province}
                    style={styles.txtinput}
                    onChangeText={(val)=>{
                        console.log(val)
                        setProvince(val)
                    }}         
                />
            </View>

            
            <Title style={styles.txtinputHeading}>Residential Address:</Title>
            <View style={styles.inputView}>
                <TextInput
                    value={address}
                    style={styles.txtinput}
                    onChangeText={(val)=>{
                        console.log(val)
                        setAddress(val)
                    }}         
                />
            </View>

            <Title style={styles.txtinputHeading}>Email:</Title>
            <View style={styles.inputView}>
                <TextInput
                    value={email}
                    style={styles.txtinput}
                    onChangeText={(val)=>{
                        console.log(val)
                        setEmail(val)
                    }}         
                />
            </View>


            <Title style={styles.txtinputHeading}>Phone Number:</Title>
            <View style={styles.inputView}>
                <TextInput
                    value={phone}
                    style={styles.txtinput}
                    onChangeText={(val)=>{
                        console.log(val)
                        setPhone(val)
                    }}         
                />
            </View>
           
        </View>
    )
}
export default LoanWitness;