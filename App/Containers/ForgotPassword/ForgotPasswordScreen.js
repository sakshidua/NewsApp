import React from 'react'
import { View,Text ,BackHandler} from 'react-native';
import styles from './ForgotPasswordStyle';
import CustomTextInput from '../../Components/CustomTextInput'
import MsButton from '../../Components/MsButton/MsButton';
import NavigationService from '../../Services/NavigationService'
import { connect } from 'react-redux'
import AppActions from 'App/Stores/App/Actions'
class ForgotPasswordScreen extends React.Component {
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
		NavigationService.navigateAndReset('LoginScreen')
		return true;
	}
    render() {
        return (
            <View style={styles.mainContainer}>
                <Text style={{color:'#101B24',fontSize:24}}>Forgot Password?</Text>
                <Text style={{marginTop:15,color:'#101B24',fontSize:14}}>Please enter your registered email ID.</Text>
                <Text style={{color:'#717F8B',fontSize:12,marginTop:10}}>We will send a verification code to your registered email ID.</Text>
                <View style={{marginTop:50}}>
                <CustomTextInput label="Email" secureTextEntry={false} placeholder="Enter your email"/>
                </View>
                <View style={{marginTop:70}}>
                <MsButton
             title="Send"
             onPress={() =>{
                 this.props.storeScreenName('ForgotPasswordScreen')
                NavigationService.navigateAndReset('VerifyOtpScreen')
             }
             
            }
            />
            </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
 
})

const mapDispatchToProps = (dispatch) => ({
    storeScreenName: (screenName) => dispatch(AppActions.storeScreenName(screenName)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPasswordScreen)