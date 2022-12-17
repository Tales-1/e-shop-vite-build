
import initializeApp from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyAyzZpxTRH6K2kPwJoJIc98pIbzDf3Vfno",
    authDomain: "fir-shop-app-24b54.firebaseapp.com",
    projectId: "fir-shop-app-24b54",
    storageBucket: "fir-shop-app-24b54.appspot.com",
    messagingSenderId: "312518196401",
    appId: "1:312518196401:web:9804694fcb8d3bf9d03690"
}


const app = initializeApp(firebaseConfig);
const db = getFirestore()

export default db