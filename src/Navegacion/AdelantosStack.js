import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Adelantos from "../Pantallas/Adelantos/Adelantos";
import RegistrarAdelanto from "../Pantallas/Adelantos/RegistrarAdelanto";
const Stack = createStackNavigator();

export default function AdelantosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Adelantos}
        name="Adelantos"
        options={{ title: "Adelantos" }}
      />
      <Stack.Screen
        component={RegistrarAdelanto}
        name="RegistrarAdelanto"
        options={{ title: "Registrar Adelanto" }}
      />
    </Stack.Navigator>
  );
}
