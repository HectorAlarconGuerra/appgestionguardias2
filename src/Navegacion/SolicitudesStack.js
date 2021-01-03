import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Solicitudes from "../Pantallas/Solicitudes/Solicitudes";

const Stack = createStackNavigator();

export default function SolicitudesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Solicitudes}
        name="Solicitudes"
        options={{ title: "Solicitudes" }}
      />
    </Stack.Navigator>
  );
}
