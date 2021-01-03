import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Adelantos from "../Pantallas/Adelantos/Adelantos";

const Stack = createStackNavigator();

export default function AdelantosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Adelantos}
        name="Adelantos"
        options={{ title: "Adelantos" }}
      />
    </Stack.Navigator>
  );
}
