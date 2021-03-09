import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Account from "../Pantallas/Cuenta/Account";

const Stack = createStackNavigator();

export default function CuentaStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen
               name="account"
               component={Account}
               options={{ title: "Mi cuenta"}}
            />
        </Stack.Navigator>
    );
    
}