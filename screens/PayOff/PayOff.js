import React,{useState,useRef} from 'react';
import { View,Text,TextInput, TouchableOpacity,Keyboard } from 'react-native';
import styles from './style';
import { Card, Title, Paragraph,RadioButton,Checkbox} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { ScrollView } from 'react-native-gesture-handler';
import DateTimePickerModal from "react-native-modal-datetime-picker"

const PayOff=()=>{
    const [selectedVal, setSelectedVal] = useState();
    const [rupees,setRupees]=useState('0.00 K');
    const [showDate,setShow]=useState(false)
    const [dateVal,setDateVal]=useState('')
    const [checked,setChecked]=useState('first')
    const [number,setNumber]=useState()
    const [expiryDate,setExpiry]=useState()
    const [cvc,setCvc]=useState()
    const [checkBoxVal,setCheckBoxVal]=useState(false)

    const ConditionalIcon=()=>{
        if(checked==='first'){
            return(
                <FontAwesome name={'cc-visa'} size={25} color={'#4953CF'}/>
            )
        }
        else if(checked==='second'){
            return(
                <FontAwesome name={'money'} size={25} color={'#4953CF'}/>
            )
        }
        else if(checked==='third'){
            return(
                <FontAwesome name={'bank'} size={25} color={'#4953CF'}/>
            )
        }
        else if(checked==='fourth'){
            return(
                <FontAwesome name={'credit-card'} size={25} color={'#4953CF'}/>
            )
        }
    }
    const ShowDatePicker=()=>{
        setShow(true)
    }

    const HideDatePicker=()=>{
        setShow(false)
    }

    const handleDatePicked=(date)=>{
        var d1=new Date();
        d1=date;
        var day=""+d1.getDate();
        var month=""+(d1.getMonth()+1);
        if(d1.getDate()<=9){
            day="0"+d1.getDate();
        }
       
        if((d1.getMonth()+1)<=9){
         var month="0"+(d1.getMonth()+1);
          }
          var a=d1+"";
          var ind =a.indexOf('T');
          var newstr=a.substr(0,ind);   
           console.log(d1);
       
        var d = new Date();
        if(d1>d){
            setDateVal(day+"/"+month+"/"+d1.getFullYear())
            console.log(dateVal)
         }
       console.log(dateVal)
       HideDatePicker()
    }

  
    return(
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Title style={{fontSize:24}}>Repayment</Title>

            <Text style={styles.amountHeading}>Amount</Text>

            <View style={styles.amount}>
                <View style={styles.picker}>
                <Picker
                    itemStyle={{fontSize:18}}
                    selectedValue={selectedVal}
                    onValueChange={(itemValue, itemIndex) =>{
                        setSelectedVal(itemValue)
                        console.log(selectedVal)
                    }
                    }>
                    <Picker.Item label="ZMK" value="zmk" />
                    
                </Picker>
                </View>
                <View style={styles.money}>
                    <TextInput 
                        keyboardType={'decimal-pad'}
                        value={rupees}
                        style={styles.txtinput}
                        onChangeText={(val)=>{
                            setRupees(val)
                        }}
                    />
                </View>
            </View>
             

             <Text style={styles.amountHeading}>Value Date</Text>

             <View style={styles.date}>
                 <View style={styles.dateText}>
                     {dateVal==''?(
                         <Text >

                         </Text>
                     ):(
                        <Text style={styles.dateFont}>
                            {dateVal}
                        </Text>
                     )}
                     
                 </View>
                 <View style={styles.calenderIcon}>
                     <TouchableOpacity onPress={()=>{
                         ShowDatePicker()
                     }}>
                        <FontAwesome name={'calendar'} size={22} color={'#4953CF'}/>
                     </TouchableOpacity>
                     <DateTimePickerModal
                        isVisible={showDate}
                        mode="date"
                        onConfirm={handleDatePicked}
                        onCancel={HideDatePicker}
                    />
                 </View>
             </View>

             <View style={styles.line}></View>

             <Text style={styles.amountHeading}>How would you like to pay?</Text>
             
             
                 <View style={styles.Row}>
                     <View style={styles.visa}>
                        <RadioButton
                        value="first"
                        
                        status={ checked === 'first' ? 'checked' : 'unchecked' }
                        onPress={() => {
                            setChecked('first')
                            
                        }}
                        color={'#4953CF'}
                        />
                        <FontAwesome name={'cc-visa'} size={25} color={'#4953CF'}/>
                     </View>

                     <View style={styles.cash}>
                        <RadioButton
                        value="second"
                        
                        status={ checked === 'second' ? 'checked' : 'unchecked' }
                        onPress={() => {
                            setChecked('second')
                            
                        }}
                        color={'#4953CF'}
                        />
                        <FontAwesome name={'money'} size={25} color={'#4953CF'}/>
                     </View>
                                
                 </View>
                

                 <View style={styles.Row}>
                     <View style={styles.visa}>
                        <RadioButton
                        value="third"
                        
                        status={ checked === 'third' ? 'checked' : 'unchecked' }
                        onPress={() => {
                            setChecked('third')
                            
                        }}
                        color={'#4953CF'}
                        />
                        <FontAwesome name={'bank'} size={25} color={'#4953CF'}/>
                     </View>

                     <View style={styles.cash}>
                        <RadioButton
                        value="fourth"
                        
                        status={ checked === 'fourth' ? 'checked' : 'unchecked' }
                        onPress={() => {
                            setChecked('fourth')
                            
                        }}
                        color={'#4953CF'}
                        />
                        <FontAwesome name={'credit-card'} size={25} color={'#4953CF'}/>
                     </View>
                                
                 </View>


                    <Title style={styles.title}>CREDIT CARD</Title>

                    <Text style={styles.amountHeading}>Card Number</Text>

                    <View style={styles.cardNumber}>
                        <View style={styles.money}>
                            <TextInput 
                                keyboardType={'numeric'}
                                style={styles.inputNumber}
                                onChangeText={(val)=>{
                                    setNumber(val)
                                }}
                            />
                        </View>
                        <View style={styles.iconSelected}>
                                <ConditionalIcon/>                            
                        </View>
                    </View>

                    <View style={styles.twotxt}>
                        <View style={styles.halfLeft}>
                            <Text style={styles.amountHeading}>Expiry Date</Text>
                            <TextInput 
                                style={styles.inputexp}
                                onChangeText={(val)=>{
                                    setExpiry(val)
                                }}
                            />
                        </View>
                        <View style={styles.halfRight}>
                            <Text style={styles.amountHeading}>CVC</Text>
                            <TextInput 
                                style={styles.inputexp}
                                onChangeText={(val)=>{
                                    setCvc(val)
                                }}
                            />
                        </View>
                    </View>

                <View style={styles.RowCheckBox}>
                    <Checkbox
                        status={checkBoxVal ? 'checked' :'unchecked'}
                        onPress={() => {
                            setCheckBoxVal(!checkBoxVal);
                          }}
                        color={'#4953CF'}
                        />
                    <Text style={styles.save}>Save detail for next time</Text>
                </View>

                <View style={styles.button}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>PAY NOW</Text>
                    </TouchableOpacity>
                </View>
             </ScrollView>
        </View>
    )
}

export default PayOff;