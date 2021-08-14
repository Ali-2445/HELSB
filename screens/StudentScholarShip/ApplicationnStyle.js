import {StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        padding:20
    },
    
    bold:{
        fontWeight:'bold'
    },
    
    TextContainer:{
        marginTop:20,flexDirection:'row',marginBottom:0
    },
    head:{
        width:8,
        height:8,
        borderRadius:4,
        backgroundColor:'black'
    },
    paragraphs:{
        fontSize:16,
        marginRight:20
    },
    dotContainer:{
        marginTop:8,
        marginRight:20
    },
    warnContainer:{
        marginTop:20,
        // backgroundColor:'#E74C3C',
        backgroundColor:'#FFDCD8',
        height:120,
        borderRadius:20,
       flexDirection:'row'
    },
    warnIcon:{
        color:'#E74C3C',
        alignSelf:'center'
    },
    iconContainer:{
        flex:0.4,
        alignItems:'center',
        justifyContent:'center'
    },
    other:{
       flex:0.6,
       flexDirection:'column',
       marginTop:25
    },
    close:{
        // alignItems:'center',
        justifyContent:'center',
        
        flex:1,
        
    },
    boldedClosing:{
        fontWeight:'bold',
        fontSize:16,
        fontSize:20,
        color:'#E74C3C'
    },
    txt:{
        flex:1
    },
    wed:{
        color:'#E74C3C'
    }
    
})

export default styles;