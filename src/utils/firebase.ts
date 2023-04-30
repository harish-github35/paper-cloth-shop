import { User } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc, // get doc
  getDoc, // get data from doc
  setDoc, // set data to doc
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";
import { Categories, Product } from "../Types";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw-KQCxReUHLzE08PtzlR4pWN0FhQQDkQ",
  authDomain: "paper-cloth.firebaseapp.com",
  projectId: "paper-cloth",
  storageBucket: "paper-cloth.appspot.com",
  messagingSenderId: "648635585685",
  appId: "1:648635585685:web:67890e24b908f14957379c",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const signOutUser = () => signOut(auth);

export const onAuthStateChangedListener = (
  callback: (user: User | null) => void
) => onAuthStateChanged(auth, callback);

export const db = getFirestore();

export const addCollectionAndDocs = async (
  collectionName: string,
  ObjectToAdd: Categories[]
) => {
  const collectionRef = collection(db, collectionName);

  const batch = writeBatch(db);
  ObjectToAdd.forEach((o) => {
    const docRef = doc(collectionRef, o.title.toLowerCase());
    batch.set(docRef, o);
  });
  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((a, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    a[title.toLowerCase()] = items;
    return a;
  }, {} as Record<string, Product[]>);

  return categoryMap;
};

export const createUserDocWithFromAuth = async (
  userAuth: User,
  additionlaUserInfo: object = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionlaUserInfo,
      });
    } catch (e) {
      console.log(e);
    }
  }

  return userDocRef;
};

export const createNewUserWithEmailPassword = async (
  email: string,
  password: string
) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailPassword = async (
  email: string,
  password: string
) => {
  return signInWithEmailAndPassword(auth, email, password);
};
