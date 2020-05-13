import React from 'react'
import { Text, View,Image } from 'react-native'
import styles from './SplashScreenStyle'
import { Helpers } from 'App/Theme'
import { Images } from '../../Theme';
import NavigationService from '../../Services/NavigationService'
import { connect } from 'react-redux'

class SplashScreen extends React.Component {
  componentDidMount() {
    setTimeout(async () => {
			try {
        if(this.props.firstLogin){
          NavigationService.navigateAndReset('WelcomeScreen')
        }else{
          NavigationService.navigateAndReset('IntroScreen')
        }
			} catch (e) {
				console.log('e',e)
			}
		}, 4000);
  }
  render() {
    return (
      <View style={[Helpers.fillRowCenter, styles.container]}>
      <View style={[Helpers.center]}>
        {/* You will probably want to insert your logo here */}
        <Image
        source={Images.logo}
      />
      </View>
    </View>
    )
  }
}

const mapStateToProps = (state) => ({
  firstLogin:state.app.firstLogin
})

const mapDispatchToProps = (dispatch) => ({
  
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashScreen)
