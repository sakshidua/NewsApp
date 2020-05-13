import React from 'react'
import { View,Text,TextInput,TouchableOpacity ,BackHandler} from 'react-native';
import styles from './VerifyOtpStyle';
import OtpInputs from '../../Components/OtpInputs';
import MsButton from '../../Components/MsButton/MsButton';
import NavigationService from '../../Services/NavigationService'
import { connect } from 'react-redux'
class VerifyOtpScreen extends React.Component {
    constructor(props) {
		super(props);
		this.onBackClicked = this._onBackClicked.bind(this);
    }
    componentWillMount() {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', this.onBackClicked);
        }
    }
    componentWillUnmount() {
		if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress', this.onBackClicked);
        }
    }
    _onBackClicked() {
        if(this.props.screenName && this.props.screenName==='VerifyPhonenumberScreen'){
            NavigationService.navigateAndReset('VerifyPhonenumberScreen')
        }else if(this.props.screenName && this.props.screenName==='VerifyEmailAdressScreen'){
            NavigationService.navigateAndReset('VerifyEmailAdressScreen')
        }else if(this.props.screenName && this.props.screenName==='ForgotPasswordScreen'){
            NavigationService.navigateAndReset('ForgotPasswordScreen')
        }
		
		return true;
	}
    render() {
        return (
            <View style={styles.mainContainer}>
                {/* <Text style={{color:'#101B24',fontSize:24}}>Forgot Password?</Text> */}
                <Text style={{marginTop:15,color:'#101B24',fontSize:14}}>Please enter your Verification code.</Text>
                <Text style={{color:'#717F8B',fontSize:12,marginTop:10}}>We will send a verification code to your registered email ID.</Text>
                <OtpInputs/>
                <View style={{marginTop:20,flexDirection:'row'}}>
            <Text style={{alignSelf:'center',color:'#717F8B',fontSize:12}}>If you didn't receive the code ?</Text>
            <TouchableOpacity onPress={()=>{
                   NavigationService.navigateAndReset('LoginScreen')
                }}> 
            <Text style={{alignSelf:'center',marginLeft:5,color:'#3E62AC',fontSize:12}}>Resend</Text>
            </TouchableOpacity>
            </View>
            <MsButton
             title="Done"
             style={{marginTop:50}}
             onPress={() => {
                 {
                     this.props.screenName && this.props.screenName==='ForgotPasswordScreen' 
                     ? NavigationService.navigateAndReset('ResetPasswordScreen')
                     :this.props.screenName==='VerifyPhonenumberScreen' &&
                     NavigationService.navigateAndReset('VerifyEmailAdressScreen')
                 }
                
             }
              
            }
            />
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    screenName:state.app.screenName,
})

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VerifyOtpScreen)