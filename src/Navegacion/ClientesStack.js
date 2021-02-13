import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Clientes from "../Pantallas/Clientes/Clientes";
import RegistrarCliente from "../Pantallas/Clientes/RegistrarCliente";
import EditarCliente from "../Pantallas/Clientes/EditarCliente";

const Stack = createStackNavigator();

export default function AdelantosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Clientes}
        name="Clientes"
        options={{ title: "Clientes" }}
      />
      <Stack.Screen
        component={RegistrarCliente}
        name="RegistrarCliente"
        options={{ title: "Registrar Cliente" }}
      />
      <Stack.Screen
        component={EditarCliente}
        name="EditarCliente"
        options={{ title: "Editar Cliente" }}
      />
    </Stack.Navigator>
  );
}
