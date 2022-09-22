import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  deleteDoc,
} from "firebase/firestore";

function useCrud() {
  const db = getFirestore();

  function createTask(data) {
    return create(data, "tasks");
  }

  function deleteTask(itemId) {
    return remove(itemId, "tasks");
  }

  function getTask() {
    return get("tasks");
  }

  function getTaskById(userId) {
    return getByUserId(userId, "tasks");
  }

  function create(data, collectionName) {
    return addDoc(collection(db, String(collectionName)), data);
  }

  async function remove(itemId, collectionName) {
    const docRef = await getDocRef(itemId, collectionName);
    return deleteDoc(docRef);
  }

  async function get(collectionName) {
    const querySnapshot = await getDocs(collection(db, String(collectionName)));
    let data = [];
    if (querySnapshot.size) {
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), ...{ id: doc.id } });
      });
    }
    return data;
  }

  async function getDocRef(itemId, collectionName) {
    const querySnapshot = await getDocs(collection(db, String(collectionName)));
    let data;
    if (querySnapshot.size) {
      querySnapshot.forEach((doc) => {
        if (doc.id === itemId) {
          data = doc.ref
        }
      });
    }
    return data;
  }

  async function getByUserId(userId, collectionName) {
    const querySnapshot = await getDocs(collection(db, String(collectionName)));
    let data = [];
    if (querySnapshot.size) {
      querySnapshot.forEach((doc) => {
        if (doc.data().uid === userId) {
          data.push({ ...doc.data(), ...{ id: doc.id } });
        }
      });
    }
    return data;
  }

  return { createTask, getTask, getTaskById, deleteTask };
}

export default useCrud;
