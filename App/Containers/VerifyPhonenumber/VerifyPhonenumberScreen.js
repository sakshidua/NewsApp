import React from 'react'
import { View,Text } from 'native-base';
import {BackHandler} from 'react-native'
import styles from './VerifyPhonenumberStyle';
import CustomTextInput from '../../Components/CustomTextInput'
import MsButton from '../../Components/MsButton/MsButton';
import NavigationService from '../../Services/NavigationService'
import { connect } from 'react-redux'
import AppActions from 'App/Stores/App/Actions'
class VerifyPhonenumberScreen extends React.Component {
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
            <View style={styles.mainContainer}>
                <Text style={{color:'#101B24',fontSize:14}}>Please verify your registered phone number.</Text>
                <Text style={{color:'#717F8B',fontSize:12,marginTop:10}}>We will send a verification code to your registered phone number.</Text>
                <View style={{marginTop:50}}>
                <CustomTextInput label="Phone Number" secureTextEntry={false} placeholder="Enter your phone number"/>
                </View>
                <MsButton
                style={{marginTop:60}}
             title="Send"
             onPress={() =>{
                 this.props.storeScreenName('VerifyPhonenumberScreen')
                NavigationService.navigateAndReset('VerifyOtpScreen')
             }
             
            }
            />
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
)(VerifyPhonenumberScreen)