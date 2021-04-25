import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Alert,
} from "react-native";
import { Avatar, Icon, Input, Button, Rating } from "react-native-elements";
import { obternerRegistroxID, ObtenerUsuario } from "../../Utils/Acciones";
import { size } from "lodash";
import Loading from "../../Components/Loading";

export default function Detalle() {
  return (
    <View>
      <Text>Detalle</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  boxsuperior: {
    backgroundColor: "#fff",
    marginTop: -50,
    paddingTop: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: "center",
  },
  titulos: {
    color: "#075e54",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  precio: {
    fontSize: 18,
    color: "#128c7e",
    fontWeight: "bold",
    paddingLeft: 10,
  },
  descripcion: {
    fontWeight: "300",
    fontSize: 16,
    alignSelf: "center",
    paddingHorizontal: 10,
    marginVertical: 10,
    color: "#757575",
    textAlign: "center",
  },
  avatarbox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
    flex: 1,
  },
  avatar: {
    width: 60,
    height: 60,
  },

  boxinternoavatar: {
    justifyContent: "center",
    flexDirection: "row",
  },
  displayname: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#075E54",
  },
  photovendor: {
    width: 60,
    height: 60,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  textArea: {
    height: 150,
  },
  btnsend: {
    backgroundColor: "#075e54",
  },
});
