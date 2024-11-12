import {getApp,getApps,initializeApp} from "firebase/app";
import {getFirestore} from "firebase/app";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain:"drive-b08.firebaseapp.com",
    projectId:"drive-b08",
    storageBucket:"drive-b08.appspot.com",
    messagingSenderId:"1000000000000",
    appId:"1:1000000000000:web:00000000000000000000000000000000",
    measurementSenderId:"G-0000000000",
    appId:"1:81678156040:web:17ad699282000104ea22127d",
};

!getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirebaseStore(); 
const storage = getStorage();

export {db,storage};