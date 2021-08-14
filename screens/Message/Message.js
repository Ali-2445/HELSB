import React,{useState,useCallback, useEffect} from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  ScrollView
} from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

import { GiftedChat,Bubble,Send,InputToolbar,Avatar } from 'react-native-gifted-chat'
import styles from '../ChatScreen/style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const MessagesScreen=({route,navigation})=>{

  console.log(route.params.userName)
  console.log(route.params.path)
  
  const [messages, setMessages] = useState([])

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        // createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          
        },
      },
        {
          _id: 2,
          text: 'Hello World',
          // createdAt: new Date(),
          user: {
            _id: 1,
            name: 'React Native',
           
          },
        },
    ])
  }, [])
  
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])


  const renderBubble=(props)=>{
    return(
      <Bubble {...props} wrapperStyle={{
        right:{
          backgroundColor:'#4953CF',
          marginBottom:10,
        },left:{
          backgroundColor:'#DDDFEC',
          marginBottom:10
        }
        }}  
        textStyle={{
          left:{
            color:'#888FB4'
          }
        }}
      />
    )
    
  }


  // const renderToolbar=(props)=>{
  //   return(
      
  //     // <InputToolbar
  //     //      {...props}
  //     //      containerStyle={
  //     //        {marginBottom:5}
  //     //      }
          
           
  //     // />
  //     <View style={{flexDirection:'row',backgroundColor:'white',marginBottom:5,alignItems:'center'}}>
  //       <View style={{flex:0.1,alignItems:'center'}}>
  //         <FontAwesome name={'paperclip'} size={25} color={'#BFBFBF'}/>
  //       </View>
  //       <View style={{flex:0.8}}>
  //           <TextInput    
  //               style={{width:'80%',backgroundColor:'#fff',marginLeft:5,borderRadius:30,borderWidth:1,borderColor:'#BFBFBF',paddingLeft:10,color:'black',fontSize:16}}
  //               placeholder={'Type a message'}
  //               placeholderTextColor={'#BFBFBF'}
  //           />
  //       </View>
  //       <View style={{flex:0.1}}>
   
  //         <TouchableOpacity onPress={()=>{
  //                console.log('tapped')
  //                onSend(messages)
  //           }}>
  //         <FontAwesome name={'send-o'} size={25} color={'blue'} style={{marginRight:10,alignItems:'center',marginBottom:5}}/>
            

  //         </TouchableOpacity>
             
  //       </View>
        
        
  //     </View>
  //   )
  // }

  const renderAvatar=(props)=>{
    return(
      <Avatar {...props} 
            showAvatarForEveryMessage={null}
      />
    )
  }

  // const rendersend=(props)=>{
  //   return(
  //     <Send {...props}>
  //       <View>
  //         <FontAwesome name={'send-o'} size={25} color={'blue'} style={{marginRight:10,alignItems:'center',marginBottom:5}}/>
  //       </View>
  //     </Send>
  //   )
  // }
    return(
      <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      textInputProps={styles.txt}
      alwaysShowSend
      // renderSend={rendersend}
      // renderInputToolbar={renderToolbar}
      renderAvatar={renderAvatar}
      
    />
    )
}

export default MessagesScreen;