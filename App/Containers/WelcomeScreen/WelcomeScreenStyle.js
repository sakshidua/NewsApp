import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
    mainContainer:{
        marginTop:43
    },
    skipTextStyle:{
      alignSelf:'flex-end',
      fontSize:18,
      color:'#325165',
      marginRight:26
    },
    welcomeTextStyle:{
        alignSelf:'center',
        fontSize:48,
        color:'#2C324A',
        fontWeight:'bold',
        marginTop:60
        
    },
    belowWelcomeStyle:{
        alignSelf:'center',
        marginLeft:42,
        marginRight:42,
        textAlign:'center',
        fontSize:14,
        color:'#888888'
    }
})