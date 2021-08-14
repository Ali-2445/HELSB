import React,{useState} from 'react';
import { View,Text } from 'react-native';
import styles from './ApplicationnStyle';
import { Card, Title, Paragraph} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { ScrollView } from 'react-native-gesture-handler';


const ApplicationMethod=()=>{
    return(
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.TextContainer}>
                <View style={styles.dotContainer}>
                    <Text style={styles.head}></Text>
                </View>
                <Paragraph style={styles.paragraphs}>
                Applicant Should Submit a type <Text style={styles.bold}>application letter</Text> responding to the advertisement clearly stating the field of study desired, age , mobile number for easy communication
                </Paragraph>
            </View>

            <View style={styles.TextContainer}>
                <View style={styles.dotContainer}>
                    <Text style={styles.head}></Text>
                </View>
                <Paragraph style={styles.paragraphs}>
                       <Text style={styles.bold}>CV</Text> , Certified photocopies of educational certificates, Transcript, NRC, Color passport size photo and copy of passport pages 2 and 3
                </Paragraph>
            </View>


            <View style={styles.TextContainer}>
                <View style={styles.dotContainer}>
                    <Text style={styles.head}></Text>
                </View>
                <Paragraph style={styles.paragraphs}>
                <Text style={styles.bold}>Two letters of recommendation</Text> one from applicant employee and one from a professor or  associate professor, telephone number and email address of the refrees must be included in letters
                </Paragraph>
            </View>


            <View style={styles.TextContainer}>
                <View style={styles.dotContainer}>
                    <Text style={styles.head}></Text>
                </View>
                <Paragraph style={styles.paragraphs}>
                <Text style={styles.bold}>A Study Plan or synopsis</Text> of  summarized details of preferred course and how the intended course of study will enhance one's contribution to Zambia development <Text style={styles.bold}>(500 words)</Text>
                </Paragraph>
            </View>


            
           <View style={styles.warnContainer}>
               <View style={styles.iconContainer}>
                    <MaterialIcons name={'error-outline'} size={90} style={styles.warnIcon}/>
               </View>
               <View style={styles.other}>
                   <View style={styles.close}>
                       <Text style={styles.boldedClosing}>Closing Date</Text>
                   </View>
                   <View style={styles.txt}>
                       <Text style={styles.wed}>Wednesday 13 May,2020</Text>
                   </View>
               </View>
           </View>
           
            </ScrollView>
        </View>
    )
}

export default ApplicationMethod;