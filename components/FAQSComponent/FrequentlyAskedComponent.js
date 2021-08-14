import React,{useState} from 'react';
import {
  View,
  Text,
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './style'

const FaqComponent=({btnText,hiddenText})=>{
    const [plus,setPlus]=useState(true)
    return(
        <View style={styles.buttonContainer}>
                <TouchableWithoutFeedback style={styles.buttons} onPress={()=>setPlus(!plus)}>
                    <Text style={styles.buttonText}>{btnText}</Text>
                    {plus?(
                        <View style={styles.plus}>
                            <FontAwesome name={'plus'} size={20} />
                        </View>
                    ):(
                        <View style={styles.plus}>
                            <FontAwesome name={'minus'} size={20} />
                        </View>
                    )}
                </TouchableWithoutFeedback>
                {plus?(
                    null
                ):(
                    <View style={styles.hiddenView}>
                        <Text style={styles.hiddenText}>{hiddenText}</Text>
                    </View>
                )}
            </View>
    )
}



export default FaqComponent;