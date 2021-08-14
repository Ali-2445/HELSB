import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        flex:1,
        margin:20
    },
    picker:{
        borderWidth:1,borderColor:'#BCBCBC',borderRadius:10,flex:0.4,backgroundColor:'#fff'
    },
    amount:{
        flexDirection:'row',
        // borderWidth:1,
        // borderColor:'black'
    },
    money:{
        flex:0.7,
        // backgroundColor:'#fff'
    },
    txtinput:{
        marginRight:5,
        marginLeft:10,
        paddingLeft:10,
        borderWidth:1,
        borderColor:'#BCBCBC',
        borderRadius:10,
        backgroundColor:'#fff',
        flex:1,
        color:'black'
    },
    amountHeading:{
        marginTop:20,
        fontSize:16,
        marginBottom:10
    },
    date:{
        backgroundColor:'#fff',
        height:60,
        borderWidth:1,
        borderColor:'#BCBCBC',
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'center'
    },
    dateText:{
        flex:0.8,
        justifyContent:'center',
        paddingLeft:20
        
    },
    calenderIcon:{
        flex:0.2,
        alignItems:'center',
        justifyContent:'center'
    },
    line:{
        flex:0.3,
        borderBottomColor:'black',
        borderBottomWidth:1,
        marginTop:20,
        marginBottom:10
    },
 
    Row:{
        height:60,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
        paddingLeft:20
    },
   
    visa:{
        flex:0.5,
        flexDirection:'row',
        alignItems:'center'
    },
    cash:{
        flex:0.5,
        flexDirection:'row',
        alignItems:'center'
    },
    title:{
        color:'#4953CF',
        marginTop:20,
        fontSize:23
    },
    cardNumber:{
        backgroundColor:'#fff',
        height:60,
        borderColor:'#BCBCBC',
        borderWidth:1,
        borderRadius:10,
        flexDirection:'row',
        borderBottomColor:'#2ECC71',
        borderBottomWidth:2
    },
    iconSelected:{
        flex:0.3,
        alignItems:'center',
       
        justifyContent:'center'
    },
    inputNumber:{
        marginRight:5,
        marginLeft:10,
        paddingLeft:10,
        // borderWidth:1,
        // borderColor:'#BCBCBC',
        borderRadius:10,
        backgroundColor:'#fff',
        flex:1,
        color:'black'
    },
    twotxt:{
        flexDirection:'row',
        marginBottom:10
    },
    halfLeft:{
        flex:0.5,
        marginRight:20,
        
    },
    halfRight:{
        flex:0.5,
       
    },
    inputexp:{
        marginRight:10,
        paddingLeft:10,
        // borderWidth:1,
        // borderColor:'#BCBCBC',
        borderRadius:10,
        backgroundColor:'#fff',
        flex:1,
        color:'black',
        borderWidth:1,
        borderColor:'#BCBCBC',
        borderBottomColor:'#2ECC71',
        borderBottomWidth:2
    },
    RowCheckBox:{
        flexDirection:'row',
        marginTop:20,
        alignItems:'center',
    },
    save:{
       
        fontSize:16,
  
    },
    button:{
        marginTop:20,
        alignItems:'center'
    },
    btn:{
        // width:'80%',
        width:'100%',
        backgroundColor:'#4953CF',
        alignItems:'center',
        justifyContent:'center',
        height:50
    },
    btnText:{
        fontSize:17,
        fontWeight:'bold',
        color:'#fff'
    },
    dateFont:{
        fontWeight:'bold',
        fontSize:16
    }
})

export default styles;