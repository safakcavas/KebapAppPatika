import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './ınput.style';


function Input({label,placeholder,onChangeText}){
  return(
    <View style={styles.container}>
          <Text style={styles.label}>{label}</Text>
              <View style={styles.inputContainer}>
                   <TextInput placeholder={placeholder} style={styles.inputtext} onChangeText={onChangeText} />
              </View>
    </View>
  );
}
export default Input; 


