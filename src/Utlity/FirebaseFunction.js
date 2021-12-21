import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import {
  collection,
  addDoc,
  doc,
  setDoc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "../Firebase/firebase";

let uploadFile = (file, contentType, fileName, folder) => {
  const storage = getStorage();
  const metadata = {
    contentType,
  };
  const storageRef = ref(storage, folder + fileName);
  const uploadTask = uploadBytesResumable(storageRef, file, metadata);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        reject(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          resolve(downloadURL);
        });
      }
    );
  });
};

let updateVideoUrl = async (userId, videoUrl) => {
  try {
    const userRef = doc(db, "users", userId);

    await updateDoc(userRef, {
      videoUrl,
    });
  } catch (error) {
    console.log(error);
  }
};
let updateImageUrl = async (userId, imageUrl) => {
  try {
    const userRef = doc(db, "users", userId);

    await updateDoc(userRef, {
      imageUrl,
    });
  } catch (error) {
    console.log(error);
  }
};

let getUserData = async (userId) => {
  try {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      // doc.data() will be undefined in this case

      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

export { uploadFile, updateVideoUrl, updateImageUrl, getUserData };
