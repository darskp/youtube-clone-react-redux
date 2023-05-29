import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyC6nR_TlVPuP-2Z9wwN__psJ9sd37TLRFY",
  authDomain: "clone-778be.firebaseapp.com",
  projectId: "clone-778be",
  storageBucket: "clone-778be.appspot.com",
  messagingSenderId: "501063407868",
  appId: "1:501063407868:web:bd76039a02d5e8ce529f79"
};

const app = initializeApp(firebaseConfig);
let auth=getAuth(app);
let db=getFirestore(app);
let storage=getStorage(app);
export default app;

export {auth,db,storage};