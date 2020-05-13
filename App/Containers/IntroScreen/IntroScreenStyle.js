import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
    image: {
       alignSelf:'center',
       marginTop:100,
      },
      text: {
        fontSize: 14,
        color: Colors.subTextColor,
        textAlign: 'center',
        marginTop:10
      },
      title: {
        fontSize: 28,
        color: Colors.textColor,
        textAlign: 'center',
      },
      dot: {
        width: 25,
        height: 5,
        borderRadius: 5,
        marginHorizontal: 4,
        backgroundColor:Colors.primary
      },
      inactivedot:{
        width: 15,
        height: 5,
        borderRadius: 5,
        marginHorizontal: 4,
        backgroundColor:Colors.gray

      },
      slide:{
          marginTop:60,
          marginLeft:10,
          marginRight:10
      },
      getStartedViewStyle:{
          backgroundColor:Colors.primary,
          alignSelf:'center',
          justifyContent:'center',
          alignItems:'center',
          alignContent:'center'
      },
      getStartedTextStyle:{
          color:'white'
      }
})