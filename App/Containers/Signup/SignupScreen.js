import React from 'react'
import { View ,Text,Image,TouchableOpacity,BackHandler} from 'react-native';
import styles from './SignUpScreenStyle';
import CustomTextInput from '../../Components/CustomTextInput'
import { CheckBox } from 'react-native-elements'
import MsButton from '../../Components/MsButton/MsButton';
import NavigationService from '../../Services/NavigationService'
import { Images } from '../../Theme';
export default class SignupScreen extends React.Component {
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
                <CustomTextInput label="User name" secureTextEntry={false} placeholder="Enter your name"/>
                <View style={{marginTop:30}}>
                <CustomTextInput label="Email" secureTextEntry={false} placeholder="Enter your email"/>
                </View>
                <View style={{marginTop:30}}>
                <CustomTextInput label="Phone Number" secureTextEntry={false} placeholder="Enter your phone number"/>
                </View>
                <View style={{marginTop:30}}>
                <CustomTextInput label="Password" secureTextEntry={true} placeholder="Enter your password"/>
                </View>
                <CheckBox   
            title='I accept the policy and terms'
            containerStyle={{backgroundColor:'transparent',borderWidth: 0}}
            textStyle={{color:'#717F8B',fontSize:14}}/>
            <View style={{marginTop:10}}>
            <MsButton
             title="Signup"
             onPress={() =>
              NavigationService.navigateAndReset('VerifyPhonenumberScreen')
            }
            />
            </View>
            <Text style={{alignSelf:'center',color:'#8A9EAD',fontSize:14,marginTop:10}}>or signup with</Text>
            <View style={{alignSelf:'center',flexDirection:'row',marginTop:20}}>
            <Image  source={Images.google}/>
            <Image  source={Images.facebook}/>
            </View>
            <View style={{marginTop:20,flexDirection:'row',alignSelf:'center'}}>
            <Text style={{alignSelf:'center',color:'#717F8B',fontSize:12}}>Don't have an account?</Text>
            <TouchableOpacity onPress={()=>{
                   NavigationService.navigateAndReset('LoginScreen')
                }}> 
            <Text style={{alignSelf:'center',marginLeft:5,color:'#3E62AC',fontSize:12}}>Login</Text>
            </TouchableOpacity>
            </View>
            </View>
        );
    }
}