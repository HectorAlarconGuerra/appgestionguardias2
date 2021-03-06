import React, {useState, useEffect} from 'react';
import * as firebase from "firebase";
//import Loading2 from "../../Components/Loading2";
import Loading from "../../Components/Loading";
import UserGuest from "./UserGuest";
import UserLogged from "./UserLogged";


export default function Account(){
    const [login, setLogin] = useState(null);

    useEffect(() => {
         firebase.auth().onAuthStateChanged((user)=>{
             !user ? setLogin(false) : setLogin(true);
         });
     }, []);
    
   // if(login === null) return <Loading2 isVisible={true} text="Cargando..."/>;
    if(login === null) return <Loading isVisible={true} text="Cargando..."/>;


  return login ? <UserLogged/> : <UserGuest/>;
  //return login ? <UserGuest/> : <UserLogged/>;
}