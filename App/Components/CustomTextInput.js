import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 55, 
    position: 'relative',
  },
  labelContainer: {
    position: 'absolute',
    backgroundColor: '#FFF',
    top: -8,
    left: 25,
    paddingLeft:5,
    paddingRight:5,
    zIndex: 50,
  },
  textInput: {
    flex: 1, 
    borderWidth: 1, 
    borderColor: "#728FDE",
    justifyContent: 'flex-end',
    height: 44,
    borderRadius: 15,
    paddingHorizontal: 28,
  }
})

const CustomTextInput = ({ label,secureTextEntry,placeholder, style, ...props}) => (
  <View style={styles.container}>
    <View style={styles.labelContainer}>
      <Text style={{fontSize:14,color:'#101B24'}}>{label}</Text>
    </View>
    <TextInput style={styles.textInput} placeholder={placeholder} secureTextEntry={secureTextEntry}/>
  </View>
);

export default CustomTextInput;