import React from 'react';
import { StyleSheet, View, Text, Image }from "react-native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
import RegisterForm from "../../Components/Account/RegisterForm";

export default function Register() {
    return (
        <KeyboardAwareScrollView>
            <Image
                source={require("../../../assets/logo.png")}
                resizeMode="contain"
                style={styles.logo}
            />
            <View style={styles.viewForm}>
                <RegisterForm/>
            </View>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    logo:{
        width: "100%",
        height: 150,
        marginTop: 20
    },
    viewForm:{
        marginRight: 40,
        marginLeft: 40,
    }
})