import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:10
    },
    progressbarcontainer:{
        // flex:0.7,
        // width:'90%',
        alignItems:'flex-start',
        justifyContent:'center',
        paddingLeft:10,
        paddingRight:10
    },
    LoanContainer:{
        height:80,
        paddingLeft:10,
        flexDirection:'row',
        paddingRight:10,
        
    },
    LoanAndScholarshipContainer:{
        flex:5,
        paddingRight:10,
        paddingLeft:10,
        flexDirection:'column'
    },
    bartext:{
        paddingBottom:10,
        fontSize:15,
        alignSelf:'flex-start'
    },
    barProgressText:{
        color:'green',
        fontWeight:'bold'
    },
    totalLoan:{
        flex:1,
        borderWidth:1,
        borderColor:'#fff',
        margin:10,
        borderRadius:10,
        backgroundColor:'#9B59B6',
        justifyContent:'center',
        marginLeft:0,
        marginRight:5,
        shadowColor: "#9B59B6",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
    },
    paid:{
        flex:1,
        borderWidth:1,
        borderColor:'#fff',
        margin:10,
        borderRadius:10,
        backgroundColor:'#2ECC71',
        justifyContent:'center',
        marginRight:5,
        marginLeft:10,
        shadowColor: "#2ECC71",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
    },
    buttonText:{
        fontSize:16,
        fontWeight:'bold',
        alignSelf:'center',
        color:'#fff'
    },
    upperTextLoan:{
        fontSize:12,
        color:'#D297EB',
        alignSelf:'center',
        fontWeight:'bold'
    },
    upperTextPaid:{
        fontSize:12,
        color:'#A2FFCA',
        alignSelf:'center',
        fontWeight:'bold'
    },
    landSHead:{
        position:'absolute',
        top:5,
        fontSize:18,
        fontWeight:'bold',
        marginLeft:10
    },
    documentIcon:{        
        height:40,
        width:40,
        backgroundColor:'#fff'
    },
    documentIconView:{
        position:'absolute',
        right:10,
        top:0
    },
    scholarshipComponentsView:{
        flex:1,
        marginRight:10
    },
    
    sideColor:{
        height:'100%',
        width:10,
        backgroundColor:'#FF6C00',
        position:'absolute',
        left:0,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10
    },
    upperHalfText:{
        color:'#FF6C00',
        backgroundColor:'#FED8B1',
        fontSize:12,
        fontWeight:'bold',
        borderRadius:8,
        paddingLeft:8,
        paddingRight:8
    },
    dc:{
        marginBottom:60
    },   
})

export const upperHalfTextComponent=(textColor,backColor)=>{
    return{
        color:textColor,
        backgroundColor:backColor,
        fontSize:12,
        fontWeight:'bold',
        borderRadius:8,
        paddingLeft:8,
        paddingRight:8
    }
}

export const sideColorComponent=(color)=>{
    return{
        height:'100%',
        width:10,
        backgroundColor:color,
        position:'absolute',
        left:0,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10
    }
}

export default styles;