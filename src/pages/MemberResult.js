import React from "react";
import {View,Text,StyleSheet} from 'react-native';


function MemberResult({route}){
    const {user} =route.params;
    return(
        <View>
            <Text style={styles.message}>Kayıt tamamlandı</Text>
            <Text style={styles.text}>üye adı :{user.username}    </Text>
            <Text style={styles.text}>üye soyadı:{user.surname}     </Text>
            <Text style={styles.text}>üye yaşı: {user.age}   </Text>
            <Text style={styles.text}>üye e-postası:{user.eposta}  </Text>
        </View>
    );
}

const styles= StyleSheet.create({
    text:{
    fontSize:20,
    fontWeight:'bold',
    margin:5,
    },
    message:{
        fontSize:50,
        fontWeight:'bold',
        textAlign:'center',
        },
});
export default MemberResult;
