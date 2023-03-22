import React from 'react'
import { Icon } from '@chakra-ui/react'
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);
  return (
    <div>
        <button>
            <Icon colorscheme='none' as={FaShoppingCart}/>
            <span>{quantity}</span>
        </button>
    </div>
  )
}

export default CartWidget;