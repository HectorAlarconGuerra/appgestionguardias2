import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import { ListarDocumentos } from "../../Utils/Acciones";

export default function Documentos() {
  const navigation = useNavigation();
  const [documentos, setDocumentos] = useState({});

  useEffect(() => {
    (async () => {
      setDocumentos(await ListarDocumentos());
    })();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      {documentos.length > 0 ? (
        <FlatList
          data={documentos}
          renderItem={(item) => (
            <Documento
              documentos={item}
              setDocumentos={setDocumentos}
              navigation={navigation}
            />
          )}
        />
      ) : (
        <View style={{ alignSelf: "center" }}>
          <View
            style={{
              width: 120,
              height: 120,
              borderColor: "#f07218",
              borderWidth: 1,
              borderRadius: 60,
              alignSelf: "center",
            }}
          >
            <Icon
              type="material-community"
              name="cart-plus"
              size={100}
              color="#f07218"
              style={{ margin: 10 }}
            />
          </View>
        </View>
      )}
      <Icon
        name="plus"
        type="material-community"
        color="#f07218"
        containerStyle={styles.btncontainer}
        onPress={() => {
          navigation.navigate("RegistrarDocumento");
        }}
        reverse
      />
    </View>
  );
}

function Documento(props) {
  const { documentos, setDocumentos, navigation } = props;
  const {
    nombreDocumento,
    nombreInstitucion,
    fechaPresentacion,
  } = documentos.item;

  return (
    <View style={styles.container}>
      <View style={styles.viewmedio}>
        <Text style={styles.nombreDocumento}>{nombreDocumento}</Text>
        <Text style={styles.nombreInstitucion}>{nombreInstitucion}</Text>
        <Text style={styles.fechaPresentacion}>{fechaPresentacion}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btncontainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    shadowColor: "#000000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
  },
  container: {
    flexDirection: "row",
    flex: 1,
    paddingVertical: 10,
    borderBottomColor: 0.5,
    borderBottomColor: "#f07218",
    shadowColor: "#f07218",
    shadowOffset: { height: 10 },
    shadowOpacity: 0.9,
  },
  viewmedio: {
    flex: 1,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  nombreDocumento: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    color: "#075e54",
  },
  nombreInstitucion: {
    fontSize: 16,
    color: "#757575",
  },
  fechaPresentacion: {
    fontSize: 16,
    color: "#128c7e",
  },
});
