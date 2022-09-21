import { useState } from "react";

import {
  doc,
  addDoc,
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore";

function useCrud() {
  const db = getFirestore();

  function createTask(data) {
    create(data, "tasks");
  }

  async function create(data, collectionName) {
    console.log(collection);
    try {
      const docRef = await addDoc(collection(db, String(collectionName)), data);
      console.log(`Document created under the ID: ${docRef.id}`);
    } catch (error) {
      console.log("Error adding document: ", error);
    }
  }

  async function getObject(collectionName) {
    const querySnapshot = await getDocs(collection(db, String(collectionName)));
    let data = [];
    if (querySnapshot.size) {
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), ...{ id: doc.id } });
      });
    }
    return data;
  }

  async function getObjectById(userId, collectionName) {
    const querySnapshot = await getDocs(collection(db, String(collectionName)));
    let data = [];
    if (querySnapshot.size) {
      querySnapshot.forEach((doc) => {
        if (doc.data().uid === userId) {
          console.log(doc.data());
          data.push({ ...doc.data(), ...{ id: doc.id } });
        }
      });
    }
    return data;
  }

  return { createTask, getObject, getObjectById };
}

export default useCrud;
