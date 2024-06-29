import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7R28kVaMqYrFRFGXC9UP1wvscUoRl4C0",
  authDomain: "crwn-clothing-db-a7228.firebaseapp.com",
  projectId: "crwn-clothing-db-a7228",
  storageBucket: "crwn-clothing-db-a7228.appspot.com",
  messagingSenderId: "138397595943",
  appId: "1:138397595943:web:682097e6f675e3ef345102",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.error("error creating user", error.message);
    }
  }

  return userDocRef;
};
