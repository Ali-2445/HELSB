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
import styles from './style';
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
  } from './MessageStyles';
  import SkeletonPlaceholder from "react-native-skeleton-placeholder";


  const Messages = [
    {
      id: '1',
      userName: 'Alex bwalya',
      userImg: require('../../images/pic4.jpg'),
      messageTime: '4:45 pm',
      messageText:
      'Are we meeting today?',
      imgPath:'./images/pic4.jpg',
    },
    {
      id: '2',
      userName: 'Jay Banda',
      userImg: require('../../images/pic1.jpeg'),
      messageTime: '4:45 pm',
      messageText:
      'Are we meeting today?',
      imgPath:'pic1.jpeg',
    },
    {
      id: '3',
      userName: 'Mike Chalo',
      userImg: require('../../images/pic2.jpeg'),
      messageTime: '4:45 pm',
      messageText:'Are we meeting today?',
      imgPath:'pic2.jpeg',
    },
    {
      id: '4',
      userName: 'Simon Mate',
      userImg: require('../../images/pic3.jpg'),
      messageTime: '4:45 pm',
      messageText:
        'Are we meeting today?',
        imgPath:'pic3.jpg',
    },
    {
      id: '5',
      userName: 'Jane Cheelo',
      imgPath:'pic5.jpg',
      userImg: require('../../images/pic5.jpg'),
      messageTime: '4:45 pm',
      messageText:'Are we meeting today?',
    },
  ];

const ChatScreen=({navigation})=>{
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
                                        <MessageText>{item.messageText}</MessageText>
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

export default ChatScreen;