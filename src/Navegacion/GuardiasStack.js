import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Guardias from "../Pantallas/Guardias/Guardias";
import RegistrarGuardia from "../Pantallas/Guardias/RegistrarGuardia";

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
    </Stack.Navigator>
  );
}
