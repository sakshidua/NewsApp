import { createAppContainer, createStackNavigator } from 'react-navigation'

import ExampleScreen from 'App/Containers/Example/ExampleScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import IntroScreen from 'App/Containers/IntroScreen/IntroScreen'
import WelcomeScreen from 'App/Containers/WelcomeScreen/WelcomeScreen'
import LoginScreen from 'App/Containers/LoginScreen/LoginScreen'
import SignupScreen from 'App/Containers/Signup/SignupScreen'
import ForgotPasswordScreen from 'App/Containers/ForgotPassword/ForgotPasswordScreen'
import VerifyOtpScreen from 'App/Containers/VerifyOtp/VerifyOtpScreen'
import ResetPasswordScreen from 'App/Containers/ResetPassword/ResetPasswordScreen'
import VerifyPhonenumberScreen from 'App/Containers/VerifyPhonenumber/VerifyPhonenumberScreen'
import VerifyEmailAdressScreen from 'App/Containers/VerifyEmailAddress/VerifyEmailAdressScreen'

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const StackNavigator = createStackNavigator(
  {
    SplashScreen: SplashScreen,
    IntroScreen: IntroScreen,
    WelcomeScreen: WelcomeScreen,
    LoginScreen:LoginScreen,
    SignupScreen:SignupScreen,
    ForgotPasswordScreen:ForgotPasswordScreen,
    VerifyOtpScreen:VerifyOtpScreen,
    ResetPasswordScreen:ResetPasswordScreen,
    VerifyPhonenumberScreen:VerifyPhonenumberScreen,
    VerifyEmailAdressScreen:VerifyEmailAdressScreen

  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'SplashScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
