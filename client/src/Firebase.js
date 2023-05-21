import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAMla0zhGga6MN-EsM9IFwxii9fb2DqHvc",
    authDomain: "server-1d7ac.firebaseapp.com",
    projectId: "server-1d7ac",
    storageBucket: "server-1d7ac.appspot.com",
    messagingSenderId: "32241709102",
    appId: "1:32241709102:web:203c8bd9eb489eb7402fbf",
    measurementId: "G-PNZK4ZWM46"
	
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
