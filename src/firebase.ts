import { initializeApp } from "firebase/app";

import 
{   GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from  "firebase/auth"

import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc
} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAyzZpxTRH6K2kPwJoJIc98pIbzDf3Vfno",
    authDomain: "fir-shop-app-24b54.firebaseapp.com",
    projectId: "fir-shop-app-24b54",
    storageBucket: "fir-shop-app-24b54.appspot.com",
    messagingSenderId: "312518196401",
    appId: "1:312518196401:web:9804694fcb8d3bf9d03690"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

const googleProvider = new GoogleAuthProvider()

const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth,googleProvider)
        const user = res.user
        const q = query(collection(db,"users"), where("uid", "==", user.uid))
        const docs = await getDocs(q)
        if(docs.docs.length === 0){
            await addDoc(collection(db,"users"), {
                uid:user.uid,
                name:user.displayName,
                authProvider:"google",
                email:user.email
            })
        }
    } catch(err){
        if(err instanceof Error){
            console.error(err)
            alert(err.message)
        } else {
            console.log("unexpected error", err)
        }
        
    }
}

const logInWithEmailAndPassword = async (email:string,password:string) => {
    try {
        await signInWithEmailAndPassword(auth,email,password)
    } catch (err) {
        if(err instanceof Error){
            console.error(err)
            
        } else {
            console.log("unexpected error", err)
        }
    }
}

const registerWithEmailAndPassword = async (name:string,email:string,password:string) => {
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password)
        const user = res.user
        await addDoc(collection(db,"users"), {
            uid:user.uid,
            name,
            authProvider:"local",
            email,
        })
    } catch(err){
        if(err instanceof Error){
            console.error(err)
            
    } else {
        console.log("unexpected error", err)
    }}
}


const sendPasswordReset = async (email:string) => {
    try { 
        await sendPasswordResetEmail(auth,email)
        alert("Password reset link sent!")
    } catch (err) {
        if(err instanceof Error){
            console.error(err)
            alert(err.message)
        } else {
            console.log("unexpected error", err)
        }
    }
}

const logout = () => {
    signOut(auth)
}

export { 
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout
}