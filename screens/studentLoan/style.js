import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'#fff',
    
    },
    txtinput:{borderWidth:1,borderColor:'black',backgroundColor:'#fff',width:'90%',borderRadius:10,color:'black',fontSize:16,paddingLeft:15,marginTop:10,marginBottom:10},
    txtinputHeading:{
        fontSize:17,paddingLeft:15
    },
    inputView:{
        width:'100%',alignItems:'center'
    },
    bold:{
        fontWeight:'bold',color:'#fff'
    },
    therefore:{
        padding:10,fontSize:16,paddingLeft:16,paddingRight:16
    },
    note:{
        backgroundColor:'#FFEFE0',
        width:'90%',
        borderRadius:20,
        padding:10,
        alignItems:'center',
        justifyContent:'center',
    
    },
    NoteContainer:{
        alignItems:'center',
        marginTop:10,
        marginBottom:30
    },
    noteFont:{
        fontSize:16
    },
    buttonView:{
        width:'100%',alignItems:'center',height:70,justifyContent:'center'
    },
    button:{
        width:'90%',alignItems:'center',backgroundColor:'#4953CF',height:50,justifyContent:'center',borderRadius:10
    },
    text:{
        fontSize:18,fontWeight:'bold',color:'#fff'
    },
    buttonContainer:{
        width:'100%',
        height:70,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonPrevious:{
        height:50,
        backgroundColor:'#fff',
        flex:1,
        marginRight:10,
        marginLeft:10,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#4953CF',
        alignItems:'center',
        justifyContent:'center'
    },
    nextButton:{
        height:50,
        backgroundColor:'#4953CF',
        flex:1,
        marginRight:10,
        marginLeft:10,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    preText:{
        fontSize:17,
        fontWeight:'bold',
        color:'#4953CF',
    },
    nextText:{
        fontSize:17,
        fontWeight:'bold',
        color:'#fff',
    },
    bottomConatiner:{
        backgroundColor:'#4953CF',
        height:230,
        padding:10,
        paddingTop:20,
        // flexDirection:'row'
    },
    chkBox:{
        flex:0.1,
        // borderWidth:1,
        // borderColor:'#fff'
    },
    chkBoxText:{
        flex:0.9,
        margin:10,
        marginTop:0,
        // borderWidth:1,
        // borderColor:'#fff',
        paddingLeft:5
    },
    btnCheckSeperator:{
        flex:0.7
    },
    textStyle:{
        fontSize:18,
        //fontWeight:'bold',
        color:'#fff'
    },
    chkBtnSeperator:{
        flexDirection:'row',
        flex:0.7
    },
    apply:{
        flex:0.3,
        alignItems:'center',
      
        padding:10
    },
    applyButton:{
        backgroundColor:'#fff',
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    btnText:{
        fontWeight:'bold',
        color:'#4953CF',
        fontSize:22
    }

})

export default styles;