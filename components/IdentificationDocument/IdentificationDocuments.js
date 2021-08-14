import React,{useState} from 'react';
import {
    TouchableOpacityBase,
  View,Text,TouchableOpacity,TextInput
} from 'react-native';

import styles from './style';
import { Card, Title, Paragraph} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import DocumentPicker from 'react-native-document-picker'

const Identify=()=>{

    const [nrc,setNrc]=useState()
    const [driving,setDriving]=useState()
    const [pasport,setpasport]=useState()
    const [town,setTown]=useState()
    const [province,setProvince]=useState()
    const [address,setAddress]=useState()
    const pickNrc=(async ()=>{
        try {
            const res = await DocumentPicker.pick({
              type: [DocumentPicker.types.allFiles],
            })
            console.log('Res')
            console.log(res)
            setNrc(res)
          } catch (err) {
            if (DocumentPicker.isCancel(err)) {
              
            } else {
              throw err
            }
          }
    })

    const pickDriving=(async ()=>{
        try {
            const res = await DocumentPicker.pick({
              type: [DocumentPicker.types.allFiles],
            })
            console.log('Res')
            console.log(res)
            setDriving(res)
            setNrc(res)
          } catch (err) {
            if (DocumentPicker.isCancel(err)) {
              
            } else {
              throw err
            }
          }
    })

    const pickPassport=(async ()=>{
        try {
            const res = await DocumentPicker.pick({
              type: [DocumentPicker.types.allFiles],
            })
            console.log('Res')
            console.log(res)
            setpasport(res)
          } catch (err) {
            if (DocumentPicker.isCancel(err)) {
              
            } else {
              throw err
            }
          }
    })
    return(
        <View style={styles.container}>
            <Card>
                <Card.Content>
                    <Title>Section 3</Title>
                    
                </Card.Content>
            </Card>
            <View style={styles.titleContainer}>
                <Title style={{flex:0.9}}>Identification Document</Title>
                <View style={{flex:0.1,padding:5,alignItems:'center'}}>
                    <MaterialIcons name={'navigate-next'} size={25} style={{transform:[{rotateZ:'270deg'}]}}/>
                </View>
            </View>

            <View style={styles.main}>
                <View style={styles.seperate}>
                    <Title>
                        NRC
                    </Title>
                    <View style={styles.dottedContainer}>
                        <TouchableOpacity style={styles.button} onPress={()=>{
                            pickNrc()
                        }}>
                                <FontAwesome5Icon name={'file'} size={25} color={'#4953CF'}/>
                                <Title style={styles.btnText}>Click here to upload</Title>
                            </TouchableOpacity>
                    </View>
                </View>
                

                <View style={styles.seperate}>
                    <Title>
                        Driving License
                    </Title>
                    <View style={styles.dottedContainer}>
                        <TouchableOpacity style={styles.button} onPress={()=>{
                            pickDriving()
                        }}>
                            <FontAwesome5Icon name={'file'} size={25} color={'#4953CF'}/>
                            <Title style={styles.btnText}>Click here to upload</Title>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={styles.seperate}>
                    <Title>
                        Passport
                    </Title>
                    <View style={styles.dottedContainer}>
                        <TouchableOpacity style={styles.button} onPress={()=>{
                            pickPassport()
                        }}>
                                <FontAwesome5Icon name={'file'} size={25} color={'#4953CF'}/>
                                <Title style={styles.btnText}>Click here to upload</Title>
                            </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.titleContainer}>
                <Title style={{flex:0.9}}>Address Details</Title>
                <View style={{flex:0.1,padding:5,alignItems:'center'}}>
                    <MaterialIcons name={'navigate-next'} size={25} style={{transform:[{rotateZ:'270deg'}]}}/>
                </View>
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

            <Title style={styles.txtinputHeading}>Province</Title>
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


            <Title style={styles.txtinputHeading}>Residential Address</Title>
            <View style={styles.inputView}>
                <TextInput
                    value={address}
                    style={styles.multilineTxtInput}
                    multiline={true}
                    onChangeText={(val)=>{
                        console.log(val)
                        setAddress(val)
                    }}         
                />
            </View>
        </View>
    )
}

export default Identify;