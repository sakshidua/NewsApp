import React from 'react'
import { View,Text,TouchableOpacity,Image,BackHandler,ToastAndroid } from 'react-native';
import { CheckBox } from 'react-native-elements'
import styles from './LoginScreenStyle';
import CustomTextInput from '../../Components/CustomTextInput'
import MsButton from '../../Components/MsButton/MsButton';
import NavigationService from '../../Services/NavigationService'
import { Images } from '../../Theme';
import { connect } from 'react-redux'
import { GoogleSignin, statusCodes } from 'react-native-google-signin';
class LoginScreen extends React.Component {
    constructor(props) {
		super(props);
		this.onBackClicked = this._onBackClicked.bind(this);
    }
    componentWillMount() {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', this.onBackClicked);
        }
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
            webClientId: '868044407832-c8fictr69f2ia1gu7g69acthiiunqm3c.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: true,
          });
          GoogleSignin.configure();
    }
    componentWillUnmount() {
		if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress', this.onBackClicked);
        }
    }
    _onBackClicked() {
		NavigationService.navigateAndReset('WelcomeScreen')
		return true;
    }
    _signIn = async () => {
        //Prompts a modal to let the user sign in into your application.
        try {
          // const a = await GoogleSignin.revokeAccess();
          // const b = await GoogleSignin.signOut();
    
          // console.log(a, b);
          await GoogleSignin.hasPlayServices({
            showPlayServicesUpdateDialog: true,
          });
          const userInfo = await GoogleSignin.signIn();
          console.log('userInfo',userInfo)
          const email = userInfo.user.email;
          //this.props.checkEmailExist(email);
          //  this.setState({ userInfo: userInfo });
        } catch (error) {
            console.log('error',error)
          if (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
              ToastAndroid.show('Login was cancelled', ToastAndroid.SHORT);
            } else if (error.code === statusCodes.IN_PROGRESS) {
              ToastAndroid.show('Login is in progress, please wait', ToastAndroid.SHORT);
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
              ToastAndroid.show('Google play service is not available', ToastAndroid.SHORT);
            } else {
              ToastAndroid.show('Please check your internet connectivity', ToastAndroid.SHORT);
            }
          }
        }
      };
    render() {
        return (
            <View style={styles.mainContainer}>
            <CustomTextInput label="User name" secureTextEntry={false} placeholder="Enter your name"/>
            <View style={{marginTop:35}}>
            <CustomTextInput label="Password" secureTextEntry={true} placeholder="Enter your password"/>
            </View>
            <View style={{flexDirection:'row'}}>
            <CheckBox   
            title='Remember me'
            containerStyle={{backgroundColor:'transparent',width:140,borderWidth: 0}}
            textStyle={{color:'#717F8B',fontSize:14}}/>
             <TouchableOpacity style={{alignSelf:'center',color:'#717F8B',marginLeft:25}} onPress={()=>{
                   NavigationService.navigateAndReset('ForgotPasswordScreen')
                }}> 
            <Text style={{alignSelf:'center',color:'#717F8B',marginLeft:13}}>Forgot Password?</Text>
            </TouchableOpacity>
            </View>
            <View style={{marginTop:80}}>
            <MsButton
             title="Login"
             onPress={() =>
              NavigationService.navigateAndReset('WelcomeScreen')
            }
            />
            </View>
            <Text style={{alignSelf:'center',color:'#8A9EAD',fontSize:14,marginTop:10}}>or login with</Text>
            <View style={{alignSelf:'center',flexDirection:'row',marginTop:20}}>
                <TouchableOpacity onPress={this._signIn}>
            <Image source={Images.google}/>
            </TouchableOpacity>
            <Image  source={Images.facebook}/>
            </View>
            <View style={{marginTop:20,flexDirection:'row',alignSelf:'center'}}>
            <Text style={{alignSelf:'center',color:'#717F8B',fontSize:12}}>Don't have an account?</Text>
            <TouchableOpacity onPress={()=>{
                   NavigationService.navigateAndReset('SignupScreen')
                }}> 
            <Text style={{alignSelf:'center',marginLeft:5,color:'#3E62AC',fontSize:12}}>Signup</Text>
            </TouchableOpacity>
            </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    
  })
  
  const mapDispatchToProps = (dispatch) => ({
    
  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginScreen)