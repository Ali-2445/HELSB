import { Platform, StyleSheet } from "react-native";


const styles=StyleSheet.create({
    getTitleHeight(heightt){
        return StyleSheet.create({
            gg:{
                height:heightt-20
            }
        })
    },
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    header:{
        flex:1.2,
        backgroundColor:'#4953CF'
    },
    inputContainer:{
        flex:2,
        padding:10,
        backgroundColor:'#fff',
        margin:10,
    },
    buttonContainer:{
        flex:0.8,
        height:100,
        margin:5,
        position:'relative',
    },
    textInput:{
        color:'black',
        padding:10,
        paddingLeft:5,
        fontSize:18,
        borderWidth:1,
        borderLeftColor:'#fff',
        borderRightColor:'#fff',
        borderTopColor:'#fff',
    },
    inputHeading:{
        fontSize:15,
        fontWeight:'bold',
    },
    inputTextWrapper:{
        marginTop:20,
    },
    button:{
        color:'#fff',
        backgroundColor:'#4953CF',
        width:'90%',
        alignSelf:'center',
        height:50,
        justifyContent:'center'
        
    },
    buttonText:{
        alignSelf:'center',
        color:'#fff',
        fontWeight:'bold',
        fontSize:18
    },
    
    forget:{
        fontSize:17,
        marginTop:20,
        marginBottom:20
    },
    signupbutton:{
        color:'#1e90ff',
        fontSize:17
    },
    forgetConatiner:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        marginLeft:20,
        fontSize:22,
        color:'#fff',
        marginTop:20
    },
    SignUpTitle:{
        marginLeft:20,
        color:'#fff',
        fontWeight:'bold',
        fontSize:40,
        position:'absolute',
        bottom:30
    },
    triangleCorner: {
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderRightWidth: 130,
        borderTopWidth: 130,
        borderRightColor: "transparent",
        borderTopColor: "#fff",
        position:'absolute',
        bottom:0
      },
    triangleCornerTopRight: {
        transform: [{ rotate: "270deg" }],
      },
      triangleBottomRight:{
          transform:[{rotate:'180deg'}]
      },
      circle:{
          height:190,
          width:190,
          borderRadius:95,
          backgroundColor:'#4953CF',
          position:'absolute',
          bottom:0,
          marginLeft:-10
          
      },
      triangleRightCorner:{
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderRightWidth: 250,
        borderTopWidth: 170,
        borderRightColor: "transparent",
        borderTopColor: "#fff",
        position:'absolute',
        bottom:0,
        right:0
      },
      oval:{
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: "#fff",
        transform: [{rotate:'220deg'},{scaleY:2.2}],
        position:'absolute',
        right:10
      },
      secondOval:{
        width: 82,
        height: 90,
        borderRadius: 16,
        backgroundColor: "#fff",
        transform: [{rotate:'230deg'},{scaleY:2.5}],
        position:'absolute',
        right:60,
        bottom:20,
        borderTopStartRadius:80,
        borderTopEndRadius:10
      },

    
      secondCircle:{
          position:'absolute',
          top:23,
          height:50,width:50,
          backgroundColor:'#fff',
          borderRadius:25,
          right:9
      },
      thirdCircle:{
        position:'absolute',
        top:20,
        height:70,width:70,
        backgroundColor:'#fff',
        borderRadius:35,
        right:-10
      },
      fourthCircle:{
        position:'absolute',
        top:20,
        height:30,width:30,
        backgroundColor:'#fff',
        borderRadius:15,
        right:5
      },
      fifthCircle:{
        position:'absolute',
        top:20,
        height:30,width:30,
        backgroundColor:'#fff',
        borderRadius:15,
        right:0
      }
    
    
})

export default styles;
