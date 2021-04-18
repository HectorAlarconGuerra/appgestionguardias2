import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Icon, Avatar, Image, Rating, Badge } from "react-native-elements";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { size } from "lodash";
import { ListarProductos, ObtenerUsuario } from "../../Utils/Acciones";
import Busqueda from "../../Components/Busqueda";
//import { ListarSolicitudes } from "../../Utils/Acciones";

export default function Solicitudes() {
  // const [solicitudes, setsolicitudes] = useState({});
  const navigation = useNavigation();
  const [productlist, setproductlist] = useState([]);
  const [search, setsearch] = useState("");
  const [mensajes, setmensajes] = useState("Cargando...");
  const [notificaciones, setnotificaciones] = useState(0);
  const { photoURL } = ObtenerUsuario();
  const [categoria, setcategoria] = useState("");

  useEffect(() => {
    (async () => {
      setproductlist(await ListarProductos());
    })();
  }, []);

  return (
    <View style={styles.frame}>
      <StatusBar backgroundColor="#f07218" />
      <View style={styles.header}>
        <KeyboardAwareScrollView>
          <View style={styles.menu}>
            <Avatar
              rounded
              size="medium"
              source={
                photoURL
                  ? { uri: photoURL }
                  : require("../../../assets/avatar.jpg")
              }
            />
            <Image
              source={require("../../../assets/logo.png")}
              style={styles.logo}
            />
            <View>
              <Icon
                type="material-community"
                name="bell-outline"
                color="#fff"
                size={30}
              />
              <Badge
                status="error"
                containerStyle={{ position: "absolute", top: -4, right: -4 }}
                value={2}
              />
            </View>
          </View>
          <Busqueda />
        </KeyboardAwareScrollView>
      </View>
      {size(productlist) > 0 ? (
        <FlatList
          data={productlist}
          renderItem={(producto) => (
            <Producto producto={producto} navigation={navigation} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text> {mensajes}</Text>
      )}
    </View>
  );
}

function Producto(props) {
  const { producto, navigation } = props;
  const {
    titulo,
    descripcion,
    precio,
    imagenes,
    rating,
    id,
    usuario,
  } = producto.item;

  const { displayName, photoURL } = usuario;

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        navigation.navigate("detalle", { id, titulo });
      }}
    >
      <Image source={{ uri: imagenes[0] }} style={styles.imgproducto} />
      <View style={styles.infobox}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={{ textAlign: "center" }}>
          {descripcion.substring(0, 50)}
        </Text>
        <Text style={styles.vendidopor}>Vendido por</Text>
        <View style={styles.avatarbox}>
          <Avatar
            source={
              photoURL
                ? { uri: photoURL }
                : require("../../../assets/avatar.jpg")
            }
            rounded
            size="large"
            style={styles.avatar}
          />
          <Text style={styles.displayName}> {displayName} </Text>
        </View>
        <Rating
          imageSize={15}
          startingValue={rating}
          style={{ paddingLeft: 40 }}
          readonly
        />
        <Text style={styles.precio}>{precio.toFixed(2)} </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: "20%",
    width: "100%",
    backgroundColor: "#f07218",
  },
  menu: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  logo: {
    width: 50,
    height: 50,
  },
  card: {
    width: "100%",
    paddingVertical: 20,
    flex: 1,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    borderBottomColor: "#f07218",
    borderBottomWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  imgproducto: {
    width: 150,
    height: 200,
    borderRadius: 10,
  },
  infobox: {
    paddingLeft: 10,
    alignItems: "center",
    flex: 1,
  },
  titulo: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    color: "#f07218",
  },
  vendidopor: {
    fontSize: 16,
    marginTop: 5,
    color: "#f07218",
    fontWeight: "700",
  },
  avatarbox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  avatar: {
    width: 30,
    height: 30,
  },
  precio: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: "bold",
    color: "#f07218",
    alignSelf: "center",
  },
  categoriahover: {
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: {
      width: 7.0,
      height: -8.0,
    },
    shadowOpacity: 0.5,
    shadowColor: "#000",
    backgroundColor: "#25d366",
    borderRadius: 40,
    elevation: 1,
  },

  categoriabtn: {
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: {
      width: 7.0,
      height: -8.0,
    },
    shadowOpacity: 0.5,
    shadowColor: "#000",
    backgroundColor: "#fff",
    borderRadius: 40,
    elevation: 1,
  },
  cattxthover: {
    fontSize: 12,
    fontStyle: "italic",
    color: "#fff",
  },
  cattxt: {
    fontSize: 12,
    fontStyle: "italic",
    color: "#128C7E",
  },
  categoriaview: {
    marginTop: 10,
  },
  titulocategoria: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  categoriatext: {
    color: "#128c7e",
    fontSize: 14,
    fontWeight: "bold",
  },
  categorialist: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingTop: 5,
  },
});
