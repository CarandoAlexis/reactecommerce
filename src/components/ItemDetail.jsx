import React from "react";
import marcador from "../assets/marcador.png";
import {Center,Card,CardBody,Image,Heading,Text,Divider,Stack,CardFooter} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetail = ({ productos }) => {
  const { id } = useParams();

  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const impreRef = doc(db, "impresiones3d", `${id}`);

    getDoc(impreRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProducto(snapshot.data());
      } else {
        console.log("No such document!");
      }
    });
  }, []);
  
  const productoFilter = productos.filter((producto) => producto.id == id);

  return (
    <div>
      {productoFilter.map((producto) =>(
        <div key={producto.id}>
        <Center>
          <Card className="card-main">
            <CardBody>
              <Image borderRadius="md" src={marcador} />
              <Stack mt="6" spacing="3">
                <Heading size="md">{producto.nombre}</Heading>
                <Text fontSize="l">
                  Detalles: {producto.descripcion}
                </Text>
                <Text fontSize="l">
                  Categoria: {producto.categoria}
                </Text>
                <Text color="green.600" fontSize="xl">
                  Precio: ${producto.precio}
                </Text>
                <Text color="red.600" fontSize="xl">
                  Stock: {producto.stock}
                </Text>
                
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter className="card-footer">
              <ItemCount
                  stock={producto.stock}
                  id={producto.id}
                  precio={producto.precio}
                  nombre={producto.nombre}
                />              
            </CardFooter>
          </Card>
        </Center>
      </div>
      ))} 
    </div>  
  );
};

export default ItemDetail;
