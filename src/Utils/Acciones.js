//const { firebaseapp } = require("./Firebase");

import { firebaseapp } from "./Firebase.js";
import * as firebase from "firebase";
import "firebase/firestore";

const db = firebase.firestore(firebaseapp);

export const validarsesion = (setvalidarsesion) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setvalidarsesion(true);
    } else {
      setvalidarsesion(false);
    }
  });
};

export const cerrarsesion = () => {
  firebase.auth().signOut();
};

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

export const ListarGuardias = async () => {
  let guardias = [];

  await db
    .collection("Guardias")
    .where("status", "==", 1)
    .get()
    .then((response) => {
      response.forEach((doc) => {
        const guardia = doc.data();
        guardia.id = doc.id;
        guardias.push(guardia);
      });
    })
    .catch((err) => {
      console.log("error");
    });

  return guardias;
};

export const ListarTurnos = async () => {
  let turnos = [];

  await db
    .collection("Turnos")
    .where("status", "==", 1)
    .get()
    .then((response) => {
      response.forEach((doc) => {
        const turno = doc.data();
        turno.id = doc.id;
        turnos.push(turno);
      });
    })
    .catch((err) => {
      console.log("error");
    });

  return turnos;
};

export const ListarAdelantos = async () => {
  let adelantos = [];

  await db
    .collection("Adelantos")
    .where("status", "==", 1)
    .get()
    .then((response) => {
      response.forEach((doc) => {
        const adelanto = doc.data();
        adelanto.id = doc.id;
        adelantos.push(adelanto);
      });
    })
    .catch((err) => {
      console.log("error");
    });

  return adelantos;
};

export const actualizarRegistro = async (coleccion, documento, data) => {
  let response = { statusresponse: false };

  await db
    .collection(coleccion)
    .doc(documento)
    .update(data)
    .then((result) => (response.statusreponse = true))
    .catch((err) => console.log(err));

  return response;
};

export const eliminarProducto = async (coleccion, documento) => {
  let response = { statusresponse: false };

  await db
    .collection(coleccion)
    .doc(documento)
    .delete()
    .then((result) => (response.statusresponse = true))
    .catch((err) => {
      console.log(err);
    });

  return response;
};

export const obternerRegistroxID = async (coleccion, documento) => {
  let response = { statusresponse: false, data: null };

  await db
    .collection(coleccion)
    .doc(documento)
    .get()
    .then((result) => {
      const producto = result.data();
      producto.id = result.id;

      response.data = producto;
      response.statusresponse = true;
    })
    .catch((err) => {
      console.log(err);
    });

  return response;
};
