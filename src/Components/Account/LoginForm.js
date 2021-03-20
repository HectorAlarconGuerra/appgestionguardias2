import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";


export default function LoginForm(props) {
 

  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Correo electronico"
        containerStyle={styles.inputForm}
       
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={true}
        
      />
    <Button
        title="Iniciar sesión"
        containerStyle={styles.btnContainerLogin}
        buttonStyle={styles.btnLogin}
        
      />
    </View>
  );
}


const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  inputForm: {
    width: "100%",
    marginTop: 20,
  },
  btnContainerLogin: {
    marginTop: 20,
    width: "95%",
  },
  btnLogin: {
    backgroundColor: "#00a680",
  },
  iconRight: {
    color: "#c1c1c1",
  },
});
