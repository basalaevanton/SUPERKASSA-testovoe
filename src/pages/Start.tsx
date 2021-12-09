import React, { useEffect } from "react";
import { withLayout } from "../layout/Layout";

import { Typography } from "@mui/material";
import { useTypedSelector, useActions } from "../hooks";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";

const Start = () => {
  const { start } = useTypedSelector((state) => state.startStore);
  const { setStart } = useActions();

  console.log(start);
  //
  const addData = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  };

  useEffect(() => {
    setStart("hello");
    // addData();
    // getData();
  }, []);

  return (
    <>
      <h1>Start React KIT</h1>
      <div>{start} from Redux</div>
      <Typography variant="h1" component="div">
        Start page with Mui
      </Typography>
    </>
  );
};

export default withLayout(Start);
