import React from 'react';
import {StyleSheet, View} from "react-native";
import {Input, Icon, Button} from "react-native-elements";

export default function RegisterForm() {
    return(
        <View style={styles.formContainer}>
            <Input
                placeholder="Correo electrónico"
                containerStyle={styles.inputForm}
                rightIcon={
                    <Icon
                        type="material-community"
                        name="at"
                        iconStyle={styles.iconRight}
                    />
                }
            />    
            <Input
                placeholder="Contraseña"
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={true}
                rightIcon={
                    <Icon
                         type="material-community"
                         name="eye-outline"
                         iconStyle={styles.iconRight}
                    />
                }

            />
            <Input
                placeholder="Repetir contraseña"
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={true}
                rightIcon={
                    <Icon
                         type="material-community"
                         name="eye-outline"
                         iconStyle={styles.iconRight}
                    />
                }
            />
            <Button
              title="Unirse"
              containerStyle={styles.btnContainerRegister}
              buttonStyle={styles.btnRegister}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
         alignItems: "center",
         justifyContent: "center",
        marginTop: 30,

    },
    inputForm:{
        width: "100%",
        marginTop:20,
    },
    btnContainerRegister:{
        marginTop: 20,
        width: "95%",
    },
    btnRegister:{
        backgroundColor: "#00a680",

    },
    iconRight:{
        color: "#c1c1c1"

    }


});
