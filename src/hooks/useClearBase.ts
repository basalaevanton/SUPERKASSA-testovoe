import {
  collection,
  deleteDoc,
  DocumentReference,
  getDocs,
  query,
} from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../lib/firebase";

export const useClearBase = (): void => {
  const deleteBase = async () => {
    const q = query(collection(db, "collection", "phones", "1"));
    const querySnapshot = await getDocs(q);

    const deleteOps: any[] = [];

    querySnapshot.forEach((doc: { ref: DocumentReference<unknown> }) => {
      deleteOps.push(deleteDoc(doc.ref));
    });

    Promise.all(deleteOps).then(() => console.log("documents deleted"));
  };

  const clearBase = async () => {
    const querySnapshot = await getDocs(
      collection(db, "collection", "phones", "1")
    );
    querySnapshot.forEach((doc) => {
      if (doc.data()) {
        deleteBase();
      }
    });
  };

  useEffect(() => {
    clearBase();
  }, []);
};
