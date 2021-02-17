import firebase from "firebase/app"
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        databaseURL: process.env.REACT_APP_DATA_BASE_URL,
        projectId: process.env.REACT_APP_PROYECT_ID,
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_APP_ID,
        measurementId: process.env.REACT_APP_MEASUREMENT_ID
}

const app = firebase.initializeApp(firebaseConfig)
//let ui = new firebaseui.auth.AuthUI(firebase.auth());
export const firestore = firebase.firestore(app)
export const auth = firebase.auth(app)
