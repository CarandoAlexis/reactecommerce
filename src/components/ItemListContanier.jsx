import React from 'react'
import ItemList from './ItemList'
import productos from '../data.json'
import { useParams } from 'react-router-dom'


const ItemListContanier = () => {
  const { categoria } = useParams();
  console.log(productos)
  const getDatos = () => {
    return new Promise((resolve,reject) =>{
      if (productos.lenght === 0){
        reject(new Error("No hay datos"))
      }
      setTimeout(() =>{
        resolve(productos);
      },2000);
    } );
  };

  async function fetchingData(){
    try{
      const datosFetched = await getDatos();
      console.log(datosFetched);
    } catch(err){
      console.log(err)
    }
  }
  fetchingData();

  
  const catFilter = productos.filter((producto) => producto.categoria === categoria);

  return<>
      {categoria ? <ItemList productos={catFilter} /> : <ItemList productos={productos} />}
  </>
;

}

export default ItemListContanier