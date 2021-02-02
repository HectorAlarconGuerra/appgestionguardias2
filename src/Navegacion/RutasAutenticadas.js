import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";

import AdelantosStack from "./AdelantosStack";
import DocumentosStack from "./DocumentosStack";
import ReportesStack from "./ReportesStack";
import SolicitudesStack from "./SolicitudesStack";
import TurnosStack from "./TurnosStack";
import CustomDrawerContent from "../Components/CustomDrawerContent";

//aquí importaremos algunos componentes más tarde

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="seguridad"
      tabBarOptions={{
        inactiveTintColor: "#fff",
        activeTintColor: "#fff",
        style: {
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
          alignItems: "center",
          backgroundColor: "#f07218",
          paddingBottom: 5,
        },
      }}
    >
      <Tab.Screen
        component={AdelantosStack}
        name="AdelantosStack"
        options={{ title: "Adelanto" }}
      />
      <Tab.Screen
        component={DocumentosStack}
        name="DocumentosStack"
        options={{ title: "Documentos" }}
      />
      <Tab.Screen
        component={ReportesStack}
        name="ReportesStack"
        options={{ title: "Reportes" }}
      />
      <Tab.Screen
        component={SolicitudesStack}
        name="SolicitudesStack"
        options={{ title: "Solicitudes" }}
      />
      <Tab.Screen
        component={TurnosStack}
        name="TurnosStack"
        options={{ title: "Turnos" }}
      />
    </Tab.Navigator>
  );
};

export default function RutasAutenticadas() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="Tienda"
          component={TabBar}
          options={{
            title: "Tienda",
            drawerIcon: () => {
              <Icon type="material-community" name="store" size={24} />;
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
