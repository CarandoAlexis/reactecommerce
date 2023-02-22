import React from 'react'
import { Icon } from '@chakra-ui/react'
import { FaShoppingCart } from "react-icons/fa";


const CartWidget = () => {
  return (
    <div>
        <button>
            <Icon colorscheme='none' as={FaShoppingCart}/>
            <span>4</span>
        </button>
    </div>
  )
}

export default CartWidget