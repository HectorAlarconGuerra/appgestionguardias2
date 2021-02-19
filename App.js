import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, LogBox } from "react-native";
import RutasAutenticadas from "./src/Navegacion/RutasAutenticadas";
import RutasNoAutenticadas from "./src/Navegacion/RutasNoAutenticadas";
//import { cerrarsesion } from "./src/Utils/Acciones";
import { validarsesion } from "./src/Utils/Acciones";
import Loading from "./src/Components/Loading";
import RutasAutenticadasGuardias from "./src/Navegacion/RutasAutenticadasGuardias";
import RutasAutenticadasClientes from "./src/Navegacion/RutasAutenticadasClientes";

LogBox.ignoreLogs(["Animated", "Setting a timer"]);

//cerrarsesion();

export default function App() {
  const [user, setuser] = useState(false);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    validarsesion(setuser);

    setloading(false);
  }, []);

  if (loading) {
    return <Loading isVisible={loading} text="Cargando.." />;
  }

  return user ? <RutasAutenticadasClientes /> : <RutasNoAutenticadas />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
