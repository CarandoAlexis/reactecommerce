import React from "react";
import marcador from "../assets/marcador.png";
import {Center,Card,CardBody,Image,Heading,Text,Divider,Stack,CardFooter,Button} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const ItemDetail = ({ productos }) => {
  const { id } = useParams();
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
                  Precio: {producto.precio}
                </Text>
                <Text color="red.600" fontSize="xl">
                  Stock: {producto.stock}
                </Text>
                
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter className="card-footer">
              
            </CardFooter>
          </Card>
        </Center>
      </div>
      ))} 
    </div>  
  );
};

export default ItemDetail;
