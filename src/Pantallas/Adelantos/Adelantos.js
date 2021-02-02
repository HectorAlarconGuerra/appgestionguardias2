import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Adelantos() {
  const navigation = useNavigation();
  return (
    <View>
      <Text onPress={() => navigation.toggleDrawer()}>Adelantos</Text>
    </View>
  );
}
