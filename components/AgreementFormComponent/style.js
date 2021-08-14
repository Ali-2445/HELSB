import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    
    },
    txtinput:{borderWidth:1,borderColor:'#BCBCBC',backgroundColor:'#fff',width:'90%',borderRadius:10,color:'black',fontSize:16,paddingLeft:15,marginTop:10,marginBottom:10},
    txtinputHeading:{
        fontSize:17,paddingLeft:15
    },
    inputView:{
        width:'100%',alignItems:'center'
    },
    bold:{
        fontWeight:'bold'
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
    titleContainer:{
        width:'100%',backgroundColor:'#F4F4F4',height:60,flexDirection:'row',alignItems:'center',paddingLeft:15
    },
    title:{
        flex:0.9
    },
    icon:{
        flex:0.1,padding:5,alignItems:'center'
    }


})

export default styles;