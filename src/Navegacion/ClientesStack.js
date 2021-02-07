import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Clientes from "../Pantallas/Clientes/Clientes";

const Stack = createStackNavigator();

export default function AdelantosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Clientes}
        name="Clientes"
        options={{ title: "Clientes" }}
      />
    </Stack.Navigator>
  );
}
