import React from 'react'
import { View,Text } from 'native-base';
import {BackHandler,TouchableOpacity} from 'react-native'
import styles from './VerifyScreenAddressStyle';
import CustomTextInput from '../../Components/CustomTextInput'
import MsButton from '../../Components/MsButton/MsButton';
import NavigationService from '../../Services/NavigationService'
import { connect } from 'react-redux'
import AppActions from 'App/Stores/App/Actions'
class VerifyEmailAdressScreen extends React.Component {
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
		NavigationService.navigateAndReset('SignupScreen')
		return true;
	}
    render() {
        return (
            <View>
                 <TouchableOpacity onPress={()=>{
                   NavigationService.navigateAndReset('LoginScreen')
                }}> 
                <Text style={{color:'#325165',fontSize:18,alignSelf:'flex-end',marginRight:30,marginTop:30}}>SKIP</Text>
                </TouchableOpacity>
            <View style={styles.mainContainer}>
                <Text style={{color:'#101B24',fontSize:14}}>Please verify your registered email ID.</Text>
                <Text style={{color:'#717F8B',fontSize:12,marginTop:10}}>We will send a verification code to your registered email ID.</Text>
                <View style={{marginTop:50}}>
                <CustomTextInput label="Email" secureTextEntry={false} placeholder="Enter your email"/>
                </View>
                <MsButton
                style={{marginTop:60}}
             title="Send"
             onPress={() =>{
                 this.props.storeScreenName('VerifyEmailAdressScreen')
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
)(VerifyEmailAdressScreen)