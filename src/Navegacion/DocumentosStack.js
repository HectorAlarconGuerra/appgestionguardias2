import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Documentos from "../Pantallas/Documentos/Documentos";
import RegistrarDocumento from "../Pantallas/Documentos/RegistrarDocumento";
import EditarDocumento from "../Pantallas/Documentos/EditarDocumento";

const Stack = createStackNavigator();

export default function DocumentosStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#f07218" },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        component={Documentos}
        name="Documentos"
        options={{ title: "Documentos" }}
      />
      <Stack.Screen
        component={RegistrarDocumento}
        name="RegistrarDocumento"
        options={{ title: "Registrar Documento" }}
      />
      <Stack.Screen
        component={EditarDocumento}
        name="EditarDocumento"
        options={{ title: "Editar Documento" }}
      />
    </Stack.Navigator>
  );
}
