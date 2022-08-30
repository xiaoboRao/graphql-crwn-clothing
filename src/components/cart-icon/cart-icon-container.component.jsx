import React from 'react'
import { useReactiveVar } from '@apollo/client'
import { cartHiddenVar } from '../..'
import CartItem from '../cart-item/cart-item.component'

const HeaderContainer = () => {
  const cartHidden = useReactiveVar(cartHiddenVar)
  console.log('cartHidden', cartHidden);
  return (
      <CartItem  />
  )
}

export default HeaderContainer