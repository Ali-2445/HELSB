import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    titleContainer:{
        width:'100%',backgroundColor:'#F4F4F4',height:60,flexDirection:'row',alignItems:'center',paddingLeft:15
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
        marginTop:20,
        marginBottom:30,
    },
    noteFont:{
        fontSize:16
    },
    bold:{
        fontWeight:'bold'
    },
    TextContainer:{
        margin:20,flexDirection:'row',marginBottom:0
    },
    head:{
        fontSize:18,fontWeight:'bold'
    },
    para:{
        fontSize:18,marginLeft:10,marginRight:15
    }
    
})



export default styles;