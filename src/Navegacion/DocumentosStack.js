import React, { useEffect } from "react";
import * as Notifications from "expo-notifications";
import { createStackNavigator } from "@react-navigation/stack";

import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import Documentos from "../Pantallas/Documentos/Documentos";
import RegistrarDocumento from "../Pantallas/Documentos/RegistrarDocumento";
import EditarDocumento from "../Pantallas/Documentos/EditarDocumento";

const Stack = createStackNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
      shouldPlaySound: true,
    };
  },
});

export default function DocumentosStack() {
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
        title: "Presentar documento",
        body: "Verificar la fecha de presentación de la documentación",
        data: { documento: "Presentado" },
      },
      trigger: {
        // hour: 1,
        // day: 7,
        seconds: 3540,
      },
    });
  };

  const buttonLeft = () => {
    return (
      <Icon
        type="material-community"
        name="menu"
        color="#fff"
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
        color="#fff"
        size={30}
        onPress={() => triggerNotificationHandler()}
      />
    );
  };
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#f07218" },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        component={Documentos}
        name="Documentos"
        options={{
          title: "Documentos",
          headerLeft: () => buttonLeft(),
          headerRight: () => buttonRight(),
        }}
      />
      <Stack.Screen
        component={RegistrarDocumento}
        name="RegistrarDocumento"
        options={{ title: "Registrar Documento" }}
      />
      <Stack.Screen
        component={EditarDocumento}
        name="EditarDocumento"
        options={{ title: "Editar Documento" }}
      />
    </Stack.Navigator>
  );
}
