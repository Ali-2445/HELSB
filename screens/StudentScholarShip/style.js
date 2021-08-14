import {StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        padding:20
    },
    para:{
        fontSize:16
    },
    bold:{
        fontWeight:'bold'
    },
    titleContainer:{
        width:'100%',height:60,flexDirection:'row',alignItems:'center',marginTop:20
    },
    line:{
        flex:0.3,borderBottomColor:'black',borderBottomWidth:1
    },
    title:{
        flex:0.6,fontSize:20
    },
    icon:{
        flex:0.1,padding:5,alignItems:'center'
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
    greenText:{
        color:'green'
    }
})

export default styles;