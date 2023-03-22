import React from "react";
import Item from "./Item";
import { Container } from "@chakra-ui/react";
const ItemList = ({ productos }) => {
  return (
    <>
      <Container maxW="container.sm">
        {productos?.map((producto) => (
          <Item
            key={producto.id}
            id={producto.id}
            nombre={producto.nombre}
            descripcion={producto.descripcion}
            precio={producto.precio}
            stock={producto.stock}
            categoria={producto.categoria}
          />
        ))}
      </Container>
    </>
  );
};

export default ItemList;
