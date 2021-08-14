import React,{useState} from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  ScrollView,
  FlatList
} from 'react-native';
import styles from '../ChatScreen/style';
import { SearchBar } from 'react-native-elements';
import {
    Container,
    Card,
    UserInfo,
    UserImgWrapper,
    UserImg,
    UserInfoText,
    UserName,
    PostTime,
    MessageText,
    TextSection,
  } from '../ChatScreen/MessageStyles';
  import SkeletonPlaceholder from "react-native-skeleton-placeholder";


  const Messages = [
    {
      id: '1',
      userName: 'Application',
      userImg: require('../../images/user.png'),
      messageTime: '4:45 pm',
      messageText:
      'Online',
      imgPath:'./images/pic4.jpg',
    },
    {
      id: '2',
      userName: 'Appeal',
      userImg: require('../../images/user.png'),
      messageTime: '4:45 pm',
      messageText:
      'Online',
      imgPath:'pic1.jpeg',
    },
    {
      id: '3',
      userName: 'Scholarship',
      userImg: require('../../images/user.png'),
      messageTime: '4:45 pm',
      messageText:'Online',
      imgPath:'pic2.jpeg',
    },
    {
      id: '4',
      userName: 'Repayment',
      userImg: require('../../images/user.png'),
      messageTime: '4:45 pm',
      messageText:
        'Online',
        imgPath:'pic3.jpg',
    },
  ];

const DepartmentScreen=({navigation})=>{
    const[value,setVal]=useState('')
    return(
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <SearchBar placeholder='Search' onChangeText={(val)=>{
                    setVal(val)
                    console.log(value)
                }} value={value} theme={'light'} inputStyle={{color:'black'}} containerStyle={styles.searchBar} leftIconContainerStyle={styles.searchIcon} placeholderTextColor={'black'} showLoading={true} searchIcon={{size:25}}/>
            </View>
            
           
              <View style={styles.chatsContainer}>
                    <FlatList 
                    data={Messages}
                    keyExtractor={item=>item.id}
                    renderItem={({item}) => (
                        <View style={styles.eachChat}>
                            <Card onPress={() => navigation.navigate('Message', {userName: item.userName,path: item.imgPath})}>
                                <UserInfo>
                                    <UserImgWrapper>
                                        <UserImg source={item.userImg} />
                                    </UserImgWrapper>
                                    <TextSection>
                                        <UserInfoText>
                                            <UserName>{item.userName}</UserName>
                                            <PostTime>{item.messageTime}</PostTime>
                                        </UserInfoText>
                                        <MessageText>{item.messageText} <View style={styles.online}/></MessageText>
                                        
                                    </TextSection>
                                </UserInfo>
                            </Card>
                        </View>
                    
                    )}
                    />
            </View>
           
        </View>
    )
}

export default DepartmentScreen;