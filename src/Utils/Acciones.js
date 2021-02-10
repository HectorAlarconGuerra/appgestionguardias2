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
