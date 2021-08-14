import React,{useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Overlay from 'react-native-modal-overlay';
import { Modal } from 'react-native-paper';
import styles,{sideColorComponent,upperHalfTextComponent} from './style'

const ComponentScholarShip=({sideColor,upBackColor,upTextColor,upText,upDate,uni,navigation})=>{

    const[visible,setVisible] = useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    return(
        
        <View style={styles.scholarshipcomponent}>
                        <View style={sideColorComponent(sideColor)}>
                            
                        </View>
                        <View style={styles.upperHalfTextPos}>
                            <Text style={upperHalfTextComponent(upTextColor,upBackColor)}>
                                {upText}
                            </Text>
                        </View>
                        <View style={styles.upperhalfDatePos}>
                            <Text style={styles.closes}>Closes: <Text style={styles.date}>{upDate}</Text></Text>
                        </View>

                        <View style={styles.lowerHalfUniPos}>
                            <Text style={styles.lowerHalfUniText}>
                                {uni}
                            </Text>
                        </View>
                        
                        <View style={styles.lowerHalfInfoIcon}>
                            <TouchableOpacity onPress={()=>{
                                    // showModal()
                                
                                    
                                }}>
                                <Ionicons name={'ios-information-circle'} size={28} style={styles.infoCircle}/>
                            </TouchableOpacity>
                        </View>
                       
                        
                        <View style={styles.lowerHalfNavigateIcon}>
                            <TouchableOpacity onPress={()=>{
                                if(upText=='STUDENT LOAN'){
                                    navigation.navigate('Student Loan')
                                }else{
                                   
                                    navigation.navigate('ScholarShip')
                                }
                               
                                
                            }}>
                                <MaterialIcons name={'navigate-next'} size={22} style={styles.navigateCircle}/>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
    )
}


export const IncompleteApplication=()=>{
    return(
        <View style={styles.incompleteComponent}> 
            <View style={styles.incompleteTextContainer}>
                <Text style={styles.incompleteText}>You have one {'\n'}incomplete application</Text>
            </View>
            <View style={styles.incompleteIconsContainer}> 
                <View style={styles.pencilIconContainer}>
                        <TouchableOpacity onPress={()=>console.log('Pencil Clicked')}>
                            <FontAwesome name={'pen'} size={20}  color={'#4953cf'}/>
                        </TouchableOpacity>
                </View>
                <View style={styles.dustbinIconContainer}>
                        <TouchableOpacity onPress={()=>console.log('Trash Clicked')}>
                            <FontAwesome name={'trash'} size={18} color={'#4953CF'} />
                        </TouchableOpacity>
                </View>
            </View>
                
        </View>
    )
}



export default ComponentScholarShip;