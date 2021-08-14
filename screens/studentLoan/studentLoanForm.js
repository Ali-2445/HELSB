import React,{useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import styles from './style';
import { ScrollView } from 'react-native-gesture-handler';
import AgreementForm from '../../components/AgreementFormComponent/AgreementForm';
import LoanAgreement from '../../components/LoanAgreement/Loan';
import Identify from '../../components/IdentificationDocument/IdentificationDocuments';
import BankDetails from '../../components/BankDetail/BankDetails';
import InstituteDetails from '../../components/InstituteDetail/IntituteDetail';
import LoanWitness from '../../components/LoanWitness/LoanWitness';
import Declaration from '../../components/Declaration/Declaration';
import { Checkbox ,Title} from 'react-native-paper';
import { LogBox } from 'react-native';

const StudentLoanForm=({navigation})=>{
    LogBox.ignoreAllLogs()
    const [current, setCurrent] = useState(0);
    
    
    const labels = ["Agreement Form","Conditions","Identification Doc Address Details","Bank Details Student Details","Details of Institute Loan Requirements","Loan Witness","Declaration Upload Documents"];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#4953CF',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#4953CF',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#4953CF',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#4953CF',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 12,
  currentStepIndicatorLabelFontSize: 14,
  stepIndicatorLabelCurrentColor: '#4953CF',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#fff',
  labelSize: 10,
  currentStepLabelColor: '#4953CF'
}




  var pageNo=0;


  const next=()=>{
      
      pageNo++;
      setCurrent(pageNo)
      console.log(current+'    pageNo'+pageNo)
  }


  const previous=()=>{
      pageNo--;
      setCurrent(pageNo)
      console.log(current+'    pageNo'+pageNo)
  }
function FormRendering(){
    if(current==0){
        console.log('value of current is :'+current)
        console.log('value of page is :'+pageNo)
        return(
            <View>
                <AgreementForm/> 
                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.button} onPress={()=>{
                        next()             
                    }}>
                        <Text style={styles.text}>Save & Next</Text>
                    </TouchableOpacity> 
                </View>
            </View>    
        )
    }
    else if(current==1){
        pageNo=1
        console.log('value of current is :'+current)
        console.log('value of page is :'+pageNo)
        
        return(
            <View>
                <LoanAgreement/>

                <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonPrevious} onPress={()=>previous()}>
                    <Text style={styles.preText}>
                        PREVIOUS
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nextButton} onPress={()=>next()}>
                    <Text style={styles.nextText}>
                        SAVE & NEXT
                    </Text>
                </TouchableOpacity>
            </View>
            </View>
        )
    }
    else if(current==2){
        pageNo=2
        console.log('value of current is :'+current)
        console.log('value of page is :'+pageNo)
        
        return(
            <View>
                <Identify/>
                <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonPrevious} onPress={()=>previous()}>
                    <Text style={styles.preText}>
                        PREVIOUS
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nextButton} onPress={()=>next()}>
                    <Text style={styles.nextText}>
                        SAVE & NEXT
                    </Text>
                </TouchableOpacity>
            </View>
            </View>
        )
    }
    else if(current==3){
        pageNo=3
        console.log('value of current is :'+current)
        return(
            <View>
                <BankDetails/>
                <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonPrevious} onPress={()=>previous()}>
                    <Text style={styles.preText}>
                        PREVIOUS
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nextButton} onPress={()=>next()}>
                    <Text style={styles.nextText}>
                        SAVE & NEXT
                    </Text>
                </TouchableOpacity>
            </View>
            </View>
        )
    }
    else if(current==4){
        pageNo=4
        console.log('value of current is :'+current)
        return(
            <View>
                <InstituteDetails/>
                <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonPrevious} onPress={()=>previous()}>
                    <Text style={styles.preText}>
                        PREVIOUS
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nextButton} onPress={()=>next()}>
                    <Text style={styles.nextText}>
                        SAVE & NEXT
                    </Text>
                </TouchableOpacity>
            </View>
            </View>
        )
    }
    else if(current==5){
        pageNo=5
        console.log('value of current is :'+current)
        return(
            <View>
                <LoanWitness/>
                <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonPrevious} onPress={()=>previous()}>
                    <Text style={styles.preText}>
                        PREVIOUS
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nextButton} onPress={()=>next()}>
                    <Text style={styles.nextText}>
                        SAVE & NEXT
                    </Text>
                </TouchableOpacity>
            </View>
            </View>
        )
    }
    else if(current==6){
        const [checked,setChecked]=useState(false)
        pageNo=6
        console.log('value of current is :'+current)
        return(
            <View>
                <Declaration/>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonPrevious} onPress={()=>previous()}>
                        <Text style={styles.preText}>
                            PREVIOUS
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.nextButton}>
                        <Text style={styles.nextText}>
                            SAVE & NEXT
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomConatiner}>
                    <View style={styles.chkBtnSeperator}>
                    <View style={styles.chkBox}>
                        <Checkbox
                            status={checked ? 'checked' :'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                            color={'#fff'}
                            />
                    </View>
                    <View style={styles.chkBoxText}>
                        <Title style={styles.textStyle}>I hereby Accept all terms and condition of <Title style={styles.bold}>Loan Agreement</Title> and try to meet criteria of scholarship.</Title>
                    </View>
                    </View>

                    <View style={styles.apply}>
                        <TouchableOpacity style={styles.applyButton} onPress={()=>{
                            // Alert.alert('wow','Congratulations Your Loan has been applied',[{text:'Back To Home Page',onPress:()=>navigation.goBack()}])
                        }}>
                            <Title style={styles.btnText}>Apply Loan</Title>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </View>
        )
    }
}

    
    
    return(
       
        <View style={styles.container}>
            <ScrollView>
           <StepIndicator
                customStyles={customStyles}
                currentPosition={current}
                stepCount={7}
                labels={labels}
                
                
            />
            
            <FormRendering/>
             
          
            </ScrollView>
    
        </View>
    )
}

export default StudentLoanForm;

