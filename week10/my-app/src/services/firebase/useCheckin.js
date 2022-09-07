import { useState} from "react";

import {
    doc,
    addDoc,
    collection,
    getDocs,
    getFirestore,
    onSnapshot,
    query,
    orderBy
} from "firebase/firestore";

function useCheckin() {
    const db = getFirestore();
    const ref = collection(db, "checkins");
    const createCheckin = (checkin) => addDoc(ref, checkin);
    const getCheckins = () => getDocs(ref);

    const createCheckinComment = (checkinID, comment) => {
        const ref = collection(db, "checkins", checkinID, "comments");
        console.log(comment);
        return addDoc(ref, comment);
    }

    const getCheckinComments = (checkinID) => {
        const ref = collection(db, "checkins", checkinID, "comments");
        return getDocs(ref);
    }

    const getCheckinCommentSnap = (checkinID, callback) => {
        const ref = collection(db, "checkins", checkinID, "comments");
        const q = query(ref, orderBy("time"));
        return onSnapshot(q, callback);
    }

    return {getCheckins, createCheckin, createCheckinComment, getCheckinComments, getCheckinCommentSnap}
}

export default useCheckin;