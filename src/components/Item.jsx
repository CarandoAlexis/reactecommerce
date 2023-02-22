import React from "react";
import marcador from "../assets/marcador.png";
import {Center,Card,CardBody,Image,Heading,Text,Divider,Stack,CardFooter,Button} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, stock, categoria }) => {
  return (
    <div>
      <div key={id}>
        <Center>
          <Card className="card-main">
            <CardBody>
              <Image borderRadius="md" src={marcador} />
              <Stack mt="6" spacing="3">
                <Heading size="md">{nombre}</Heading>

                <Text color="blue.800" fontSize="l">
                  Categoria: {categoria}
                </Text>
                <Text color="red.600" fontSize="xl">
                  Stock: {stock}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter className="card-footer">
              <Center className="btn-center">
                <Link to={`/item/${id}`}>
                  <Button variant="solid" colorScheme="green">Detalles</Button>
                </Link>
              </Center>
            </CardFooter>
          </Card>
        </Center>
      </div>
    </div>
  );
};

export default Item;
