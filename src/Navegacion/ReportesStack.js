import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import Reportes from "../Pantallas/Reportes/Reportes";
import RegistrarReporte from "../Pantallas/Reportes/RegistrarReporte";
import EditarReporte from "../Pantallas/Reportes/EditarReporte";

const Stack = createStackNavigator();

export default function ReportesStack() {
  const navigation = useNavigation();
  const buttonLeft = () => {
    return (
      <Icon
        type="material-community"
        name="menu"
        color="#f07218"
        size={30}
        onPress={() => navigation.toggleDrawer()}
      />
    );
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Reportes}
        name="Reportes"
        options={{ title: "Reportes", headerLeft: () => buttonLeft() }}
      />
      <Stack.Screen
        component={RegistrarReporte}
        name="RegistrarReporte"
        options={{ title: "Registrar Reporte" }}
      />
      <Stack.Screen
        component={EditarReporte}
        name="EditarReporte"
        options={{ title: "Editar Reporte" }}
      />
    </Stack.Navigator>
  );
}
