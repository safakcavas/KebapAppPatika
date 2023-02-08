import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../Components/Button/Button';
function Welcome({navigation}) {
    function goToMemberSign(){
        navigation.navigate('MemberSignScreen');
    }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Kebab Fitness Salonu</Text>
      <Button text="üye kaydı oluştur" onPress={goToMemberSign} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
  header:{
    fontSize:30,
    fontWeight:'bold',
    margin:10,
  },
});
export default Welcome;
