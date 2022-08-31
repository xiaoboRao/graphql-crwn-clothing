import React from 'react'
import { useReactiveVar } from '@apollo/client'
import { cartItemsVar } from '../../graphql/graph'
import CartDropdown from './cart-dropdown.component'

const CartDropdownContainer = () => {
  const cartItems = useReactiveVar(cartItemsVar)
  return <CartDropdown cartItems={cartItems} />
}

export default CartDropdownContainer
