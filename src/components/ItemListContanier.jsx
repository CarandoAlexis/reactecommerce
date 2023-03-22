import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {collection, getDocs, getFirestore} from 'firebase/firestore'


const ItemListContanier = () => {
  const { categoria } = useParams();

  const [productos, setImpresiones] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productosCollection = collection(db, "impresiones3d");
    getDocs(productosCollection).then((querySnapshot) => {
      const productos = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setImpresiones(productos);
    });
  }, []);
  
  const catFilter = productos.filter((producto) => producto.categoria === categoria);

  return<>
      {categoria ? <ItemList productos={catFilter} /> : <ItemList productos={productos} />}
  </>
;

}

export default ItemListContanier