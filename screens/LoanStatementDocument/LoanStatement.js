import React,{useState} from 'react';
import {
    TouchableOpacityBase,
  View,Text,TouchableOpacity
} from 'react-native';

import styles from './style';
import { Card, Title, Paragraph,DataTable} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from 'react-native-gesture-handler';

const LoanStatement=()=>{

    return(
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Title style={styles.helsb}>HELSB</Title>    
            <Title style={styles.title}>Student Loan </Title> 
            <Paragraph style={styles.Paragraph}>Student Account Number: <Text style={styles.bold}>0123456-15263-2</Text></Paragraph> 

            <Card style={styles.card}>
                <Title>
                    Payment Information
                </Title>
                <Paragraph style={styles.Paragraph}>as of 20-Jun-2020</Paragraph>
            </Card>  

            <Card style={styles.card}>
                <Title>
                    Minimum Payment Due
                </Title>
                <Paragraph style={styles.Paragraph}>if received on or before  XX/XX/XXX</Paragraph>
                <Title style={styles.title}>K1200</Title>
            </Card> 

            <Card style={styles.card}>
                <Title>Payments Received</Title>
                <Paragraph style={styles.Paragraph}>since  <Text style={styles.bold}>XX/XX/XX</Text></Paragraph>
                 <DataTable>
                     <DataTable.Row style={styles.tableRow}>
                         <DataTable.Cell style={styles.firstColumn}>Principal</DataTable.Cell>
                         <DataTable.Cell style={styles.secondColumn}>K</DataTable.Cell>
                         <DataTable.Cell style={styles.thirdColumn}>0.0</DataTable.Cell>
                     </DataTable.Row>

                     <DataTable.Row style={styles.tableRow}>
                         <DataTable.Cell style={styles.firstColumn}>Interest</DataTable.Cell>
                         <DataTable.Cell style={styles.secondColumn}>K</DataTable.Cell>
                         <DataTable.Cell style={styles.thirdColumn}>0.0</DataTable.Cell>
                     </DataTable.Row>

                     <DataTable.Row style={styles.tableRow}>
                         <DataTable.Cell style={styles.firstColumn}>Late Fees</DataTable.Cell>
                         <DataTable.Cell style={styles.secondColumn}>K</DataTable.Cell>
                         <DataTable.Cell style={styles.thirdColumn}>0.0</DataTable.Cell>
                     </DataTable.Row>

                     <DataTable.Row style={styles.tableRow}>
                         <DataTable.Cell style={styles.firstColumn}>Total Payment Received</DataTable.Cell>
                         <DataTable.Cell style={styles.secondColumn}>K</DataTable.Cell>
                         <DataTable.Cell style={styles.thirdColumn}>0.0</DataTable.Cell>
                     </DataTable.Row>
                 </DataTable>
            </Card>

            <Paragraph style={styles.linkContainer}>
            Visit <Text style={styles.link}>www.helsb.com/statement</Text> for more information on how to read statment
            </Paragraph>

            <Card style={styles.nopadingCard}>
                <View style={styles.tableTitle}>
                    <Title style={styles.titleText}>LOAN DETAILS AS OF XX/XX/XXXX</Title>
                </View>
                <DataTable>
                    <DataTable.Row style={styles.TopRow}>
                        <DataTable.Cell style={styles.f}><Text style={styles.loanType}>Loan Type</Text></DataTable.Cell>
                        <DataTable.Cell style={styles.s}><Text style={styles.loanType}>Loan No</Text></DataTable.Cell>
                        <DataTable.Cell style={styles.t}><Text style={styles.loanType}>More</Text></DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row >
                        <DataTable.Cell style={styles.f}>Student Loan</DataTable.Cell>
                        <DataTable.Cell style={styles.s}>21</DataTable.Cell>
                        <DataTable.Cell style={styles.t}>...</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row >
                        <DataTable.Cell style={styles.f}>Student Loan</DataTable.Cell>
                        <DataTable.Cell style={styles.s}>32</DataTable.Cell>
                        <DataTable.Cell style={styles.t}>...</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row >
                        <DataTable.Cell style={styles.f}>Student Loan</DataTable.Cell>
                        <DataTable.Cell style={styles.s}>44</DataTable.Cell>
                        <DataTable.Cell style={styles.t}>...</DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
                
            </Card>
            <Title style={styles.title}>
                Total
            </Title>
            <View style={styles.con}>
                <View style={styles.left}>
                    <Text style={styles.totalText}>Loan Balance</Text>
                    <Text>XX.XX%</Text>
                </View>
                <View style={styles.right}>
                    <Text style={styles.totalText}>Unpaid Defered</Text>
                    <Text>XX.XX%</Text>
                </View>
            </View>
            <View style={styles.con}>
                <View style={styles.left}>
                        <Text style={styles.totalText}>Total Amount Due</Text>
                        <Text>XX.XX%</Text>
                </View>
            </View>

            <Card style={styles.world}>
                <Title style={styles.qtitle}>Any Question ?</Title>
                <Title style={styles.title24}>Contact Us 24/7</Title>
                <View style={styles.callView}>
                    <MaterialIcons name={'call'} size={25} style={styles.callIcon}/>
                    <Text style={styles.title24}>+260-2354689</Text>
                </View>
                <View style={styles.callView}>
                    <FontAwesome name={'globe'} size={25} style={styles.callIcon}/>
                    <Text style={styles.title24}>www.helsb.gov.zm</Text>
                </View>
            </Card>

        <View style={styles.printCon}>
          
                <TouchableOpacity style={styles.download}>
                    <Text style={styles.txt}>Download Now</Text>
                    <FontAwesome name={'download'} size={20} style={styles.callIcon}/>
                </TouchableOpacity>
            

       
                <TouchableOpacity style={styles.print}>
                    <Text style={styles.txt}>Print Now</Text>
                    <FontAwesome name={'print'} size={20} style={styles.callIcon}/>
                </TouchableOpacity>
          
            </View>
        </ScrollView>
        </View>
    )
}

export default LoanStatement;