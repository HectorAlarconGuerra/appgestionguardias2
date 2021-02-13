import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Adelantos from "../Pantallas/Adelantos/Adelantos";
import RegistrarAdelanto from "../Pantallas/Adelantos/RegistrarAdelanto";
import EditarAdelanto from "../Pantallas/Adelantos/EditarAdelanto";

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
      <Stack.Screen
        component={EditarAdelanto}
        name="EditarAdelanto"
        options={{ title: "Editar Adelanto" }}
      />
    </Stack.Navigator>
  );
}
