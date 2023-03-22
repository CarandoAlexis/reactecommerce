import React from 'react'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";


const ItemDetailContanier = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const productosCollection = collection(db, "impresiones3d");
    getDocs(productosCollection).then((querySnapshot) => {
      const productos = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(productos);
    });
  }, []);
 
  return<>

      <ItemDetail productos={data}/>
  </>
;

}

export default ItemDetailContanier;