import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon, Input, Button } from "react-native-elements";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { validaremail } from "../Utils/Utils";
import { isEmpty, size } from "lodash";
import * as firebase from "firebase";
import Loading from "../Components/Loading";
import {addRegistro, ObtenerUsuario} from "../Utils/Acciones"

export default function RegisterForm(props) {
  const { toastRef } = props;
  const navigation = useNavigation();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [repetirpassword, setrepetirpassword] = useState("");
  const [show, setshow] = useState(false);
  const [loading, setloading] = useState(false);

  async function crearcuenta() {
    if (isEmpty(email) || isEmpty(password) || isEmpty(repetirpassword)) {
      toastRef.current.show("Todos los campos son obligatotios");
    } else if (!validaremail(email)) {
      toastRef.current.show("Correo no es válido");
    } else if (password !== repetirpassword) {
      toastRef.current.show("Las contraseñas tienen que ser iguales ");
    } else if (size(password) < 6) {
      toastRef.current.show(
        "Las contraseñas deben tener al menos 6 carácteres "
      );
    } else {
      setloading(true);
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
          toastRef.current.show("Se ha creado el usuario correctamente");
          setloading(false);
        })
        .catch((err) => {
          setloading(false);
          toastRef.current.show(
            "Ha ocurrido un error o puede que este usuario esté registrado"
          );
        });
        const usuario = ObtenerUsuario();
        const data = { ...usuario, rol: "1"}
        const resultado = await addRegistro ('usuarios', data)
        console.log(resultado)
    }
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          borderBottomColor: "#f07218",
          borderBottomWidth: 2,
          width: 100,
        }}
      />
      <Input
        placeholder="Correo"
        containerStyle={styles.input}
        rightIcon={{
          type: "material-community",
          name: "at",
          color: "#f07218",
          onPress: () => alert("Hola"),
        }}
        leftIcon={{
          type: "material-community",
          name: "account-circle-outline",
          color: "#f07218",
        }}
        onChangeText={(text) => {
          setemail(text);
        }}
        value={email}
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.input}
        leftIcon={{
          type: "material-community",
          name: "security",
          color: "#f07218",
        }}
        rightIcon={{
          type: "material-community",
          name: show ? "eye-off-outline" : "eye-outline",
          color: "#f07218",
          onPress: () => setshow(!show),
        }}
        onChangeText={(text) => {
          setpassword(text);
        }}
        secureTextEntry={!show}
        value={password}
      />
      <Input
        placeholder="Repetir Contraseña"
        containerStyle={styles.input}
        leftIcon={{
          type: "material-community",
          name: "security",
          color: "#f07218",
        }}
        rightIcon={{
          type: "material-community",
          name: show ? "eye-off-outline" : "eye-outline",
          color: "#f07218",
          onPress: () => setshow(!show),
        }}
        onChangeText={(text) => {
          setrepetirpassword(text);
        }}
        secureTextEntry={!show}
        value={repetirpassword}
      />
      <Button
        title="CREAR CUENTA"
        containerStyle={styles.btnentrar}
        buttonStyle={{ backgroundColor: "#f07218" }}
        onPress={() => crearcuenta()}
      />
      <Button
        title="INICIAR SESIÓN"
        containerStyle={styles.btnentrar}
        buttonStyle={{ backgroundColor: "#128C7E" }}
        onPress={() => navigation.goBack()}
      />
      <Loading isVisible={loading} text="Favor espere" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F6F8",
    flex: 1,
    marginTop: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: "center",
    paddingTop: 20,
  },
  input: {
    width: "90%",
    marginTop: 20,
    height: 50,
  },
  btnentrar: {
    width: "90%",
    marginTop: 20,
  },
});
