import { React,useState } from 'react';
import {View, Text, Alert} from 'react-native';
import Button from '../Components/Button/Button';
import Input from '../Components/Input';
import MemberResult from './MemberResult';

function MemberSign({navigation}) {
    const [username,setUsername] =useState(null);
    const [surname,setSurname]= useState(null);
    const [age,setAge]= useState(null);
    const [eposta,setEposta]= useState(null);

    function handleSubmit(props){
        if(
        !username || !surname || !age || !eposta  ){                    // !username İLE NULL OLUP OLMADIĞI KONTROLÜ YAPILIYOR NULL VAR İSE ALERT İLE UYARI VERECEK
        Alert.alert('UYARI', 'Bilgiler boş bırakılamaz');
        }                       

        const user={
        username,
        surname,
        age,
        eposta,
    };


    navigation.navigate('MemberResult',{user});
    }

  return (
    <View>
      <Input  placeholder='isminizı giriniz' label='Ad' onChangeText={setUsername} />
      <Input  placeholder='soyadınızı giriniz' label='Soyad' onChangeText={setSurname} />
      <Input  placeholder='yasınızı giriniz' label='Yaş' onChangeText={setAge} />
      <Input  placeholder='e-postanızı giriniz' label='e-posta' onChangeText={setEposta} />
      <Button text='kayıt ol' onPress={handleSubmit} />
    </View>
  );
}
export default MemberSign;
