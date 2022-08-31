import React from 'react'
import { cartItemsVar, cartItemsCountVar  } from '../../graphql/graph'
import CollectionItem from './collection-item.component'

const CollectionItemContainer = ({ item }) => {
  return <CollectionItem item={item} cartItemsVar={cartItemsVar} cartItemsCountVar= {cartItemsCountVar} />
}

export default CollectionItemContainer
