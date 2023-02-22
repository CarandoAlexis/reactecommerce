import React from 'react'
import ItemDetail from './ItemDetail'
import productos from '../data.json'



const ItemDetailContanier = () => {
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
  return<>

      <ItemDetail productos={productos}/>
  </>
;

}

export default ItemDetailContanier;