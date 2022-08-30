
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJSBBDPwYY8HHADF5VvrXybx_UMzMTZqs",
  authDomain: "ecommerce-react-91efc.firebaseapp.com",
  projectId: "ecommerce-react-91efc",
  storageBucket: "ecommerce-react-91efc.appspot.com",
  messagingSenderId: "540209556435",
  appId: "1:540209556435:web:a2dfa78288c11f39051d26"
};

const app = initializeApp(firebaseConfig);

const firestoreDB = getFirestore(app);

export default firestoreDB;