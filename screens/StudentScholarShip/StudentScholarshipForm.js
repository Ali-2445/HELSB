import React,{useState} from 'react';
import { View,Text } from 'react-native';
import styles from './style';
import { Card, Title, Paragraph} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { ScrollView } from 'react-native-gesture-handler';

const StdScholarship=()=>{
    return(
        <View style={styles.container}>
            <ScrollView>
            <Paragraph style={styles.para}>
                 Application are  invited from suitable qualified <Text style={styles.bold}>Zambian</Text> national that meet minimum requirement below to contest for <Text style={styles.bold}>08 Master Degree Scholarship for the 2020/2021</Text>
            </Paragraph>

            <View style={styles.titleContainer}>
                <Title style={styles.title}>Available Programs</Title>
                <View style={styles.line}></View>
                <View style={styles.icon}>
                    <MaterialIcons name={'navigate-next'} size={25} style={{transform:[{rotateZ:'270deg'}]}}/>
                </View>
            </View>

            <View style={styles.TextContainer}>
                <View style={styles.dotContainer}>
                    <Text style={styles.head}></Text>
                </View>
                <Paragraph style={styles.paragraphs}>
                Master of Law LL.M Program in Chinese Law
                </Paragraph>
            </View>

            <View style={styles.TextContainer}>
                <View style={styles.dotContainer}>
                    <Text style={styles.head}></Text>
                </View>
                <Paragraph style={styles.paragraphs}>
                International Master Of Public Health
                </Paragraph>
            </View>


            <View style={styles.TextContainer}>
                <View style={styles.dotContainer}>
                    <Text style={styles.head}></Text>
                </View>
                <Paragraph style={styles.paragraphs}>
                Master of international economic Cooperation
                </Paragraph>
            </View>


            <View style={styles.TextContainer}>
                <View style={styles.dotContainer}>
                    <Text style={styles.head}></Text>
                </View>
                <Paragraph style={styles.paragraphs}>
                Master of China Studies
                </Paragraph>
            </View>


            <View style={styles.TextContainer}>
                <View style={styles.dotContainer}>
                    <Text style={styles.head}></Text>
                </View>
                <Paragraph style={styles.paragraphs}>
                The LL.M Program in International economic Law

                </Paragraph>
            </View>


            <View style={styles.TextContainer}>
                <View style={styles.dotContainer}>
                    <Text style={styles.head}></Text>
                </View>
                <Paragraph style={styles.paragraphs}>
                MBA Program for Developing Countr

                </Paragraph>
            </View>


            <View style={styles.TextContainer}>
                <View style={styles.dotContainer}>
                    <Text style={styles.head}></Text>
                </View>
                <Paragraph style={styles.paragraphs}>
                The Asian Infrastructure Investment Bank

                </Paragraph>
            </View>

            <View style={styles.TextContainer}>
                <View style={styles.dotContainer}>
                    <Text style={styles.head}></Text>
                </View>
                <Paragraph style={styles.paragraphs}>
                Master of International Finance Program

                </Paragraph>
            </View>




            <View style={styles.titleContainer}>
                <Title style={styles.title}>Eligibility</Title>
                <View style={styles.line}></View>
                <View style={styles.icon}>
                    <MaterialIcons name={'navigate-next'} size={25} style={{transform:[{rotateZ:'270deg'}]}}/>
                </View>
            </View>

            <Paragraph style={styles.para}>
            Applicant Should be Zambian Citizens with green National Registration Card
            </Paragraph>

            <View style={styles.TextContainer}>
                <View style={styles.dotContainer}>
                    <Text style={styles.head}></Text>
                </View>
                <Paragraph style={styles.paragraphs}>
                Hold a Relevant Bachelor's degree

                </Paragraph>
            </View>

            <View style={styles.TextContainer}>
                <View style={styles.dotContainer}>
                    <Text style={styles.head}></Text>
                </View>
                <Paragraph style={styles.paragraphs}>
                Have at least 03 years work experience
                </Paragraph>
            </View>


            <View style={styles.TextContainer}>
                <View style={styles.dotContainer}>
                    <Text style={styles.head}></Text>
                </View>
                <Paragraph style={styles.paragraphs}>
                Maximum Age 45 years by SEP 2020
                </Paragraph>
            </View>


            <View style={styles.TextContainer}>
                <View style={styles.dotContainer}>
                    <Text style={styles.head}></Text>
                </View>
                <Paragraph style={styles.paragraphs}>
                Be working in government agency, financial institution or Research institute at  a senior level
                </Paragraph>
            </View>


            <View style={styles.titleContainer}>
                <Title style={styles.title}>Duration</Title>
                <View style={styles.line}></View>
                <View style={styles.icon}>
                    <MaterialIcons name={'navigate-next'} size={25} style={{transform:[{rotateZ:'270deg'}]}}/>
                </View>
            </View>

            <Paragraph style={styles.para}>
            One year or Two years <Text style={styles.greenText}>(1+1)</Text>
            </Paragraph>
            </ScrollView>
        </View>
    )
}

export default StdScholarship;