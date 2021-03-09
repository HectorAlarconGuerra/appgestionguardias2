import React from 'react';
import {StyleSheet, View} from "react-native";
import {Input, Icon, Button} from "react-native-elements";

export default function RegisterForm() {
    return(
        <View style={styles.formContainer}>
            <Input
                placeholder="Correo electrónico"
                containerStyle={styles.inputForm}
            />    
            <Input
                placeholder="Contraseña"
                containerStyle={styles.inputForm}
            />
            <Input
                placeholder="Repetir contraseña"
                containerStyle={styles.inputForm}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        // flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
        marginTop: 30,

    },
    inputForm:{
        width: "100%",
        marginTop:20,
    }

});
