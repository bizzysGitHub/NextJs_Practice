// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { log } from "console";
import { redirect } from "next/navigation";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALdei0tRWNKXFbxM7hpdu-ucE-pCAf8gc",
  authDomain: "mood-tracker-70cee.firebaseapp.com",
  projectId: "mood-tracker-70cee",
  storageBucket: "mood-tracker-70cee.firebasestorage.app",
  messagingSenderId: "207483125024",
  appId: "1:207483125024:web:310b551d2ec6d30960ab45",
  measurementId: "G-REH8E0M81Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);



if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export const auth = getAuth();

export const loginSequence = async (email :string, password : string ) => {
  try{
    const user = await signInWithEmailAndPassword(auth, email, password );

    console.log(user.user)

    return JSON.stringify(user)
    // redirect('../app/page.tsx')

  } catch (error) {
    if(error){
      console.log(error);
      throw new Error((error as Error).message)
    }

  }

  
}

export const signInSequence = async(email: string, password: string) => {
    const { user } = await createUserWithEmailAndPassword(auth, email, password)

    console.log(user);
    
}

