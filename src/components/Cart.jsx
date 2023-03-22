import React from 'react'
import marcador from "../assets/marcador.png";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import {  Button,Container,Heading,Card,CardHeader,CardBody,CardFooter,Text,Image} from "@chakra-ui/react";
import SendOrder from "./SendOrder";
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const precioTotal = cart.reduce((acc, curr) => acc + curr.quantity * curr.precio,0);

  const eliminarItem = (id) =>{
    Swal.fire({
      title: 'Está seguro de eliminar objeto del carrito?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, seguro',
      cancelButtonText: 'No, no quiero'
    }).then((result) => {
    if (result.isConfirmed){
      Swal.fire({
      title: 'Has eliminado objeto el carrito!',
      icon: 'success',
    })
      const arr = cart.filter((item)=>item.id !== id);
      setCart(arr);  
      }
  })
  }



  return (
    <>
    {cart.length === 0? (
      <Container className="main-catalogue">
      <Card maxW="sm">
        <CardHeader>
          <Heading size="md">Su carrito esta vacio</Heading>
            </CardHeader>
            <CardBody>
              <Text as="b">Presione el boton para seguir comprando</Text>
            </CardBody>
            <CardFooter>
            <Link to="/Catalogo">
                <Button colorScheme="blue">
                  Ir al catalogo
                </Button>
              </Link>
            </CardFooter>
          </Card>
    </Container>
      
    ):
    (cart.map((item) => {
        return (
          <Container key={item.id} className="main-catalogue">
            <Card maxW="sm">
              <CardHeader>
                <Heading size="md">{item.nombre}</Heading>
              </CardHeader>
              <CardBody>
                <Image borderRadius="md" src={marcador}/>
                <Text as="b">Cantidad: {item.quantity}</Text>
                <Text>Precio:$ {item.precio}</Text>
              </CardBody>
              <CardFooter>
                <Button colorScheme="red" onClick={() => eliminarItem(item.id)}>
                  Eliminar de Carrito
                </Button>
              </CardFooter>
            </Card>
          </Container>     
        );
      }))}
      {cart.length !== 0 && (
      <Container className="main-catalogue">
        <Card maxW="sm">
          <CardHeader>
            <Heading size="md">Cantidad de productos en carrito: {quantity}</Heading>
              </CardHeader>
              <CardBody>
                <Text as="b">Total: $ {precioTotal}</Text>
              </CardBody>
              <CardFooter>
                <SendOrder/>
              </CardFooter>
            </Card>
      </Container>
      )
      }
    </>
  
  );
};

export default Cart;