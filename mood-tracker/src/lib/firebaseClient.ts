// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { log } from "console";
// import { redirect } from "next/navigation";
import firebaseConfig from "./firebaseConfig";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);



if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export const auth = getAuth(app);

export const authSequence = async (mode: string, email: string, password: string) => {
  const userCred = mode === 'login'
    ? await signInWithEmailAndPassword(auth, email, password)
    : await createUserWithEmailAndPassword(auth, email, password);

  const { user } = userCred;
  const idToken = await user.getIdToken();
alert("success")
  return idToken;
};


