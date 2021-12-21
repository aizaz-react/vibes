import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import config from "../config/config";

const firebaseApp = initializeApp(config);

const auth = getAuth();

auth.languageCode = "eng";

const db = getFirestore();

export { auth, db };
