import firebase from "firebase/app"
import "firebase/firestore";

const firebaseConfig = {
        apiKey: "AIzaSyCAG6jZJoV_Uhb5L_wc4q4c7Ra3BYCq4yk",
        authDomain: "aromarte-web.firebaseapp.com",
        databaseURL: "https://aromarte-web.firebaseio.com",
        projectId: "aromarte-web",
        storageBucket: "aromarte-web.appspot.com",
        messagingSenderId: "931826286770",
        appId: "1:931826286770:web:8eaa68cc3f4d2a3507c9ab",
        measurementId: "G-X84GP08LHW"
}

const app = firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore(app)