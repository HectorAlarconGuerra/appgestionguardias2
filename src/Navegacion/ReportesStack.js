import React, { useEffect } from "react";
import * as Notifications from "expo-notifications";
import { createStackNavigator } from "@react-navigation/stack";

import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import Reportes from "../Pantallas/Reportes/Reportes";
import RegistrarReporte from "../Pantallas/Reportes/RegistrarReporte";
import EditarReporte from "../Pantallas/Reportes/EditarReporte";

const Stack = createStackNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
      shouldPlaySound: true,
    };
  },
});

export default function ReportesStack() {
  const navigation = useNavigation();

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      (notificacion) => {
        console.log(notificacion);
      }
    );
    return () => {
      subscription.remove();
    };
  }, []);

  const triggerNotificationHandler = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Registrar el reporte",
        body: "Reportar como se encuentra el puesto de guardia",
        data: { reporte: "100% éxitos" },
      },
      trigger: {
        seconds: 3540,
        //  hour: 1,
        //  minute: 3,
      },
    });
  };

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

  const buttonRight = () => {
    return (
      <Icon
        type="material-community"
        name="bell"
        color="#f07218"
        size={30}
        onPress={() => triggerNotificationHandler()}
      />
    );
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Reportes}
        name="Reportes"
        options={{
          title: "Reportes",
          headerLeft: () => buttonLeft(),
          headerRight: () => buttonRight(),
        }}
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
