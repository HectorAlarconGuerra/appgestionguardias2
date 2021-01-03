import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Reportes from "../Pantallas/Reportes/Reportes";

const Stack = createStackNavigator();

export default function ReportesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Reportes}
        name="Reportes"
        options={{ title: "Reportes" }}
      />
    </Stack.Navigator>
  );
}
