import React from 'react'
import { useReactiveVar } from '@apollo/client'
import { cartHiddenVar, cartItemsCountVar } from '../../graphql/graph';

import CartIcon from "./cart-icon.component"

const CartIconContainer = () => {
  const cartItemsCount = useReactiveVar(cartItemsCountVar)
  return (
    <CartIcon cartHiddenVar={cartHiddenVar} itemCount = { cartItemsCount } />
  )
}

export default CartIconContainer