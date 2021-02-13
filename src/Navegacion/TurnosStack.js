import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Turnos from "../Pantallas/Turnos/Turnos";
import RegistrarTurno from "../Pantallas/Turnos/RegistrarTurno";

const Stack = createStackNavigator();

export default function TurnosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Turnos}
        name="Turnos"
        options={{ title: "Turnos" }}
      />
      <Stack.Screen
        component={RegistrarTurno}
        name="RegistrarTurno"
        options={{ title: "Registrar Turno" }}
      />
    </Stack.Navigator>
  );
}
