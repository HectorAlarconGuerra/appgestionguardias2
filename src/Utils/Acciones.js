//const { firebaseapp } = require("./Firebase");

import { firebaseapp } from "./Firebase.js";
import * as firebase from "firebase";
import "firebase/firestore";

const db = firebase.firestore(firebaseapp);

export const ObtenerUsuario = () => {
  return firebase.auth().currentUser;
};

export const addRegistro = async (coleccion, data) => {
  const resultado = { error: "", statusreponse: false };

  await db
    .collection(coleccion)
    .add(data)
    .then((response) => {
      resultado.statusreponse = true;
    })
    .catch((err) => {
      resultado.error = err;
    });

  return resultado;
};

export const ListarDocumentos = async () => {
  let documentos = [];

  await db
    .collection("Documentos")
    .where("status", "==", 1)
    .get()
    .then((response) => {
      response.forEach((doc) => {
        const documento = doc.data();
        documento.id = doc.id;
        documentos.push(documento);
      });
    })
    .catch((err) => {
      console.log("error");
    });

  return documentos;
};

export const ListarSolicitudes = async () => {
  let solicitudes = [];

  await db
    .collection("Solicitudes")
    .where("status", "==", 1)
    .get()
    .then((response) => {
      response.forEach((doc) => {
        const solicitud = doc.data();
        solicitud.id = doc.id;
        solicitudes.push(solicitud);
      });
    })
    .catch((err) => {
      console.log("error");
    });

  return solicitudes;
};

export const ListarClientes = async () => {
  let clientes = [];

  await db
    .collection("Clientes")
    .where("status", "==", 1)
    .get()
    .then((response) => {
      response.forEach((doc) => {
        const cliente = doc.data();
        cliente.id = doc.id;
        clientes.push(cliente);
      });
    })
    .catch((err) => {
      console.log("error");
    });

  return clientes;
};
