import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Guardias from "../Pantallas/Guardias/Guardias";
import RegistrarGuardia from "../Pantallas/Guardias/RegistrarGuardia";
import EditarGuardia from "../Pantallas/Guardias/EditarGuardia";

const Stack = createStackNavigator();

export default function GuardiasStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Guardias}
        name="Guardias"
        options={{ title: "Guardias" }}
      />
      <Stack.Screen
        component={RegistrarGuardia}
        name="RegistrarGuardia"
        options={{ title: "Registrar Guardia" }}
      />
      <Stack.Screen
        component={EditarGuardia}
        name="EditarGuardia"
        options={{ title: "Editar Guardia" }}
      />
    </Stack.Navigator>
  );
}
