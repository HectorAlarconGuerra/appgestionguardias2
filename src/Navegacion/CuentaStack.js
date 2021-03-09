import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Account from "../Pantallas/Cuenta/Account";
import Login2 from "../Pantallas/Cuenta/Login2";
import Register from "../Pantallas/Cuenta/Register";

const Stack = createStackNavigator();

export default function CuentaStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen
               name="account"
               component={Account}
               options={{ title: "Mi cuenta"}}
            />
            <Stack.Screen
               name="login"
               component={Login2}
               options={{ title: "Iniciar sesión"}}
            />
            <Stack.Screen
               name="register"
               component={Register}
               options={{ title: "Registro"}}
            />
        </Stack.Navigator>
    );
    
}