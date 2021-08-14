import React,{useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,Text,Image
} from 'react-native';

import styles from './style';
import { Card, Title, Paragraph} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {SketchCanvas}  from '@terrylinla/react-native-sketch-canvas';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import MultipleImagePicker from '@baronha/react-native-multiple-image-picker';

const Declaration=()=>{
    const [place,setPlace]=useState()
    const [date,setDate]=useState()
    const [images,setImages]=useState('')
    var urls=[]

 
 
    const pickImage=(async ()=>{
        const response = await MultipleImagePicker.openPicker({
            mediaType:'image'
        }).then(image=>{
            setImages(image)
        })

    })
    if(images!=''){
        for(var i in images){
            var pp='file://'
            urls.push(pp+images[i]['realPath'])
            
        }
    }
    
    
    for(var i in urls){
        console.log(urls[i])
    }

    function deleteImage(img){
        console.log('Urls')
        console.log(urls.filter(item=>item!=img))
        console.log(' After Urls')
        return urls.filter(item=>item!=img)
    }
   
    return(
        <View style={styles.container}>
             <Card>
                <Card.Content>
                    <Title>Section 7</Title>
                    
                </Card.Content>
            </Card>
        
            <View style={styles.titleContainer}>
                <Title style={styles.title}>Declaration</Title>
                <View style={styles.icon}>
                    <MaterialIcons name={'navigate-next'} size={25} style={{transform:[{rotateZ:'270deg'}]}}/>
                </View>
            </View>

            <Title style={styles.txtinputHeading}>Agreement Place:</Title>
            <View style={styles.inputView}>
                <TextInput
                    value={place}
                    style={styles.txtinput}
                    onChangeText={(val)=>{
                        console.log(val)
                        setPlace(val)
                    }}         
                />
            </View>

            <Title style={styles.txtinputHeading}>Agreement Date:</Title>
            <View style={styles.inputView}>
                <TextInput
                    value={date}
                    style={styles.txtinput}
                    onChangeText={(val)=>{
                        console.log(val)
                        setDate(val)
                    }}         
                />
            </View>


            <Title style={styles.txtinputHeading}>Signature of Parent/Guardian:</Title>
            <View style={styles.dottedContainer}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <SketchCanvas
                        style={{ flex: 0.9 }}
                        strokeColor={'#4953CF'}
                        strokeWidth={4}
                        
                    />
                    <View style={{alignItems:'center',justifyContent:'flex-end',marginBottom:10,flex:0.1}}>
                        <TouchableOpacity onPress={()=>console.log(images)}>
                            <FontAwesome name={'trash'} size={18} color={'#4953CF'} />
                        </TouchableOpacity>
                    </View>
                    
                </View>    
                
            </View>
            <Title style={styles.txtinputHeading}>Signature of Student:</Title>
            <View style={styles.dottedContainer}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <SketchCanvas
                        style={{ flex: 0.9 }}
                        strokeColor={'black'}
                        strokeWidth={3}
                        
                    />
                    <View style={{alignItems:'center',justifyContent:'flex-end',marginBottom:10,flex:0.1}}>
                        <TouchableOpacity onPress={()=>console.log(images)}>
                            <FontAwesome name={'trash'} size={18} color={'#4953CF'} />
                        </TouchableOpacity>
                    </View>
                    
                </View>
                </View>


                <View style={styles.titleContainer2}>
                <Title style={styles.title}>Upload Documents</Title>
                <View style={styles.icon}>
                    <MaterialIcons name={'navigate-next'} size={25} style={{transform:[{rotateZ:'270deg'}]}}/>
                </View>
            </View>
           

            <Title style={styles.txtinputHeading}>Upload your documnets below</Title>
            <View style={styles.dottedContainer2}>
               
                    
                      <ScrollView horizontal={true}>
                      {urls.map((item,index)=>{
                                   return(
                                       <View key={index}>
                                            <Image source={{uri:item}}  style={{width:150,height:150,marginLeft:10,marginRight:10}} resizeMode={'contain'}/>
                                            <TouchableOpacity style={{position:'absolute',right:0,top:0}} onPress={()=>{
                                                deleteImage(item)
                                                console.log(urls)
                                            }}>
                                                <FontAwesome name={'times-circle'}  size={15} />
                                            </TouchableOpacity> 
                                       </View>
                                   )
                               })}
                      </ScrollView>
                               
                        
                   
                    
                    
                
            </View>
            
            <View style={styles.add}>
                <TouchableOpacity onPress={()=>{
                    pickImage()
                }}>
                    <Title style={styles.tt}>Add Document</Title>
                </TouchableOpacity>
            </View>

        </View>
    )
}
export default Declaration;