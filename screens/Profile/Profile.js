import React,{useState} from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  ScrollView
} from 'react-native';
import styles from './style';
import { Card, Title, Paragraph,Avatar ,Button} from 'react-native-paper';

const ProfileScreen=()=>{
    return(
        <View style={styles.container}>
            <ScrollView>
                <Card style={styles.profileCard}>
                    <Card.Content style={styles.content}>
                        <Avatar.Image size={140} source={require('../../images/pic3.jpg')} style={styles.avatar}/>
                        <Button mode="outlined" color={'#4953CF'} style={styles.button} labelStyle={styles.labelStyle} onPress={() => console.log('Pressed')}>
                            Change Profile Photo
                        </Button>
                        <Paragraph>
                            Registration Date : <Text style={styles.bold}>10 June 2020</Text>
                        </Paragraph>
                    </Card.Content>
                </Card>

                <Card style={styles.infoCard}>
                    <Card.Content>
                    <Title style={styles.pinfoHeading}>Personal Information{'\n'}</Title>
                    <Paragraph style={styles.pinfo}>Full Name</Paragraph>
                    <Title>John Banda{'\n'}</Title>

                    <Paragraph style={styles.pinfo}>University Name</Paragraph>
                    <Title>University of Zambia{'\n'}</Title>

                    <Paragraph style={styles.pinfo}>Program of Study</Paragraph>
                    <Title>Bachelor's Student{'\n'}</Title>

                    <Paragraph style={styles.pinfo}>Phone Number</Paragraph>
                    <Title>+260 988877{'\n'}</Title>

                    <Paragraph style={styles.pinfo}>Parent/Guardian</Paragraph>
                    <Title>MWICHE M SEKELTI{'\n'}</Title>

                    <Paragraph style={styles.pinfo}>Nationality</Paragraph>
                    <Title>Zambiam{'\n'}</Title>

                    <Paragraph style={styles.pinfo}>Address</Paragraph>
                    <Title>LIBALA SOUTH NGANGI ST 1 HOUSE NO 1038{'\n'}</Title>
                    </Card.Content>
                    <Card.Content>
                        <Button mode="outlined" color={'#4953CF'} style={styles.buttonEdit} labelStyle={styles.labelStyle} onPress={() => console.log('Pressed')}>
                                Edit
                        </Button>
                    </Card.Content>
                </Card>
            </ScrollView>
        </View>
    )
}

export default ProfileScreen;