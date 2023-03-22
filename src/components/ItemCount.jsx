import { useContext, useState } from "react";
import {  ButtonGroup,  IconButton,  Tooltip,  Center,  Button,} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { CartContext } from "../context/CartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";

const ItemCount = ({ stock, id, precio, nombre }) => {
  const notify = () => toast("Producto agregado al carrito",{
    position: "bottom-right",
    autoClose: 800,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "dark",  
  });
  const [cart, setCart] = useContext(CartContext);
  const [count, setCount] = useState(1);

  const addQty = () => {
    if(count<stock){
    setCount(count + 1);
  } else {
    Swal.fire("No puede superar el stock disponible")
  }
  };

  
  const substractQty = () => {
    if(count > 1){
    setCount(count - 1);
  }else{
    Swal.fire("No puedes tener menos de un producto")
  }
  };

  const addToCart = () => {
    setCart((currItems) => {
      const isItemFound = currItems.find((item) => item.id === id);
      if (isItemFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + count};
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: count, precio, nombre}];
      }
    });
  };

  return (
    <>
      <ButtonGroup size="sm" isAttached variant="outline">
        <IconButton icon={<MinusIcon />} onClick={substractQty}/>
        <Center>
          <Button onClick={() =>{notify(); addToCart()}} variant="solid" colorScheme="blue">
            Agregar al carrito: {count}
          </Button>
          <ToastContainer/>
        </Center>
        <IconButton icon={<AddIcon/>} onClick={addQty}/>
      </ButtonGroup>
    </>
  );
};

export default ItemCount;
