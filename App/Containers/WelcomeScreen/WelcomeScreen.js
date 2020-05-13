import React from 'react'
import { View ,Text,Image,TouchableOpacity} from 'react-native';
import styles from './WelcomeScreenStyle'
import { Images } from '../../Theme';
import NavigationService from '../../Services/NavigationService'
export default class WelcomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <TouchableOpacity onPress={()=>{
                   NavigationService.navigateAndReset('LoginScreen')
                }}> 
                <Text style={styles.skipTextStyle}>Skip</Text>
                </TouchableOpacity>
                <Text style={styles.welcomeTextStyle}>Welcome</Text>
                <Text style={styles.belowWelcomeStyle}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</Text>
                <Image
                style={{alignSelf:'flex-start',marginTop:70}}
                source={Images.welcome}
                />
            </View>
        );
    }
}
