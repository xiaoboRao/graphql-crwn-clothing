import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import { addItemToCart } from '../../redux/cart/cart.utils'
import './collection-item.styles.scss'

const CollectionItem = ({ cartItemsVar, cartItemsCountVar, item }) => {
  const { name, price, imageUrl } = item

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        onClick={() => {
          cartItemsVar(addItemToCart(cartItemsVar(), item))
          cartItemsCountVar(cartItemsCountVar() + 1)
        }}
        inverted
      >
        Add to cart
      </CustomButton>
    </div>
  )
}

export default CollectionItem
