import React from 'react'
import { Text, View,Image } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from './IntroScreenStyle'
import { Button } from 'react-native-elements';
import MsButton from '../../Components/MsButton/MsButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavigationService from '../../Services/NavigationService'
import AppActions from 'App/Stores/App/Actions'
import { connect } from 'react-redux'

const slides = [
    {
      key: 1,
      title: 'Lorem ipsum dolor sit amet, consetetur',
      text: 'Lorem ipsum dolor sit amet, consetetur elitr.',
      image: require('../../Assets/Images/slider1.png'),
      backgroundColor: '#59b2ab',
    },
    {
      key: 2,
      title: 'Lorem ipsum dolor sit amet, consetetur',
      text: 'Lorem ipsum dolor sit amet, consetetur elitr.',
      image: require('../../Assets/Images/slider2.png'),
      backgroundColor: '#febe29',
    },
    {
      key: 3,
      title: 'Lorem ipsum dolor sit amet, consetetur',
      text: 'Lorem ipsum dolor sit amet, consetetur elitr.',
      image: require('../../Assets/Images/slider3.png'),
      backgroundColor: '#22bcb5',
    }
  ];
class IntroScreen extends React.Component {
    _renderItem = ({ item }) => {
        return (
          <View style={styles.slide}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
            <Image style={styles.image} source={item.image} />
          </View>
        );
      }
      _renderDoneButton = () => {
        return (
           <MsButton
             title="Get Started"
             onPress={() =>{
               this.props.storeFirstTimeLogin()
              NavigationService.navigateAndReset('WelcomeScreen')
             }
            }
            />
        );
      };

    render() {
        return (
            <AppIntroSlider 
                renderItem={this._renderItem} 
                data={slides} 
                activeDotStyle={styles.dot} 
                dotStyle={styles.inactivedot}
                renderDoneButton={this._renderDoneButton}/>
        )
    }

}

const mapStateToProps = (state) => ({
 
})

const mapDispatchToProps = (dispatch) => ({
  storeFirstTimeLogin: () => dispatch(AppActions.storeFirstTimeLogin()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IntroScreen)