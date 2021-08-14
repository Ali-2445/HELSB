import {StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    containerStyle:{
        position:'absolute', 
        padding: 20,
        top:10,
        left:10
    },
    scholarshipcomponent:{
        width:'100%',
        height:70,
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
    upperHalfTextPos:{
        position:'absolute',
        left:20,
        top:5,
      
    },
    upperhalfDatePos:{
        position:'absolute',
        right:10,
        top:5
    },
    closes:{
        color:'#A0A0A0',
        fontSize:13,
        fontWeight:'bold'
    },
    lowerHalfUniPos:{
        position:'absolute',
        bottom:7,
        left:20,
    },
    lowerHalfUniText:{
        fontSize:16,
        fontWeight:'bold'
    },
    lowerHalfNavigateIcon:{
        position:'absolute',
        bottom:7,
        right:20,
        backgroundColor:'#728FCE',
        borderRadius:11
    },
    lowerHalfInfoIcon:{
        position:'absolute',
        bottom:3,
        right:50
    },
    navigateCircle:{
        color:'#fff'
    },
    infoCircle:{
        color:'#728FCE'
    },
    date:{
        color:'#FF6C00',
        fontSize:13,
        fontWeight:'bold'
    },
    incompleteComponent:{
        borderWidth:3,
        borderColor:'#F39C12',
        width:'100%',
        height:70,
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
        flexDirection:'row'
    },
    incompleteTextContainer:{
        flex:0.6,
        padding:10
    },
    incompleteText:{
        fontSize:16,
        fontWeight:'bold',
        color:'#F39C12'
    },
    incompleteIconsContainer:{
        flex:0.4,
        padding:5,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },
    pencil:{
        width:30,
        height:30,
        borderRadius:30/2,
        backgroundColor:'#4953cf',
        opacity:0.1,
        alignItems:'center',
        justifyContent:'center',
        
    },
    pencilIconContainer:{
        position:'absolute',
        right:55
    },
    dustbinIconContainer:{
        position:'absolute',
        right:20
    },
    imageView:{
        position:'absolute',
        top:60,
        left:30,
        bottom:60,
        right:60,
        borderWidth:1,
        borderColor:'black',
        overflow:'visible'
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