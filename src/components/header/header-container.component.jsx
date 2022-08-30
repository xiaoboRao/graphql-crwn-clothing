import React from 'react'
import { useReactiveVar } from '@apollo/client'
import { cartHiddenVar } from '../../graphql/graph'
import Header from './header.component'

const HeaderContainer = () => {
  const cartHidden = useReactiveVar(cartHiddenVar)
  return (
      <Header hidden={cartHidden} />
  )
}

export default HeaderContainer
