import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Documentos from "../Pantallas/Documentos/Documentos";

const Stack = createStackNavigator();

export default function DocumentosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Documentos}
        name="Documentos"
        options={{ title: "Documentos" }}
      />
    </Stack.Navigator>
  );
}
