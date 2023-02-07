import React from "react";
import { View,Text } from "react-native";
import Button from '../Components/Button'
function Welcome() {
    return(
        <View>
            <Text>
                    WELCOME
            </Text>
            <Button text='üye kaydı oluştur' onPress={null}/>
        </View>
    );
}
export default Welcome;