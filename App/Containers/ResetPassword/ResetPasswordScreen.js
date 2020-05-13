import React from 'react'
import {BackHandler} from 'react-native'
import { View ,Text} from 'native-base';
import styles from './ResetPasswordStyle';
import CustomTextInput from '../../Components/CustomTextInput'
import MsButton from '../../Components/MsButton/MsButton';
import NavigationService from '../../Services/NavigationService'
export default class ResetPasswordScreen extends React.Component {
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
		NavigationService.navigateAndReset('ForgotPasswordScreen')
		return true;
	}
    render() {
        return (
            <View style={styles.mainContainer}>
                <Text style={{color:'#101B24',fontSize:24}}>Forgot Password?</Text>
                <Text style={{marginTop:15,color:'#101B24',fontSize:14}}>Please enter a new password</Text>
                <View style={{marginTop:40}}>
                <CustomTextInput label="New Password" secureTextEntry={false} placeholder="Enter your new password"/>
                </View>
                <View style={{marginTop:30}}>
                <CustomTextInput label="Re-enter Password" secureTextEntry={false} placeholder="Enter your new password"/>
                </View>
                <MsButton
                style={{marginTop:30}}
             title="Send"
             onPress={() =>
              NavigationService.navigateAndReset('WelcomeScreen')
            }
            />
            </View>
        );
    }
}