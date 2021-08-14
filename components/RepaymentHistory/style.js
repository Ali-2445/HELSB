import {StyleSheet} from 'react-native';

const styles=StyleSheet.create({
    repaymentComponent:{
        width:'100%',
        height:80,
        marginBottom:20,
        borderRadius:10,
        backgroundColor:'#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    upperView:{
        flex:1,
        flexDirection:'row'
    },
    lowerView:{
        flex:1,
        flexDirection:'row'
    },
    upperLeftView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    upperRightView:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    lowerLeftView:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    lowerRightView:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },
    tickIcon:{
        position:"absolute",
        right:25
    },
    loan:{
        fontSize:20,
        fontWeight:'bold'
    },
    loanText:{
        fontSize:14
    },
    TextContainer:{
        position:'absolute',
        left:20
    },
    dateConatiner:{
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center'
    },
    date:{
        color:'#A0A0A0'
    },
    icon:{
        marginRight:5
    }
})


export const upperHalfTextComponent=(textColor,backColor)=>{
    return{
        color:textColor,
        backgroundColor:backColor,
        fontSize:12,
        fontWeight:'bold',
        borderRadius:8,
        paddingLeft:8,
        paddingRight:8,
        marginRight:5,
        position:'absolute',
        left:20
    }
}


export default styles;