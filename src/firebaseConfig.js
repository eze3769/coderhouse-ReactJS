import firebase from "firebase/app";

import "firebase/firestore";

const config = {

}

const app = firebase.initializeApp(config)

export const firestore = firebase.firestore(app)