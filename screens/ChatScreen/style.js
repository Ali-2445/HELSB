import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
    },
    searchContainer:{
        // flex:0.2,
        backgroundColor:'#4953CF',
        justifyContent:'center',
        height:90
    },
    chatsContainer:{
        flex:1,
        margin:20,
      
        
    },
    searchBar:{
       marginLeft:20,
       marginRight:20,
        backgroundColor:'#fff',
        borderRadius:30,
        height:'60%',
        justifyContent:'center',
        color:'black',
    },
    searchIcon:{
        marginLeft:20,
    },
    eachChat:{
        width:'100%',
        marginBottom:20,
        borderRadius:15,
        height:90,
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
    txt:{
        color:'black'
    },
    online:{width:9,height:9,backgroundColor:'green',borderRadius:5,marginLeft:5}
})

export default styles;