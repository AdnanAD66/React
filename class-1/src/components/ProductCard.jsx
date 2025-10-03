import React from 'react'
import './ProductCard.css'

function ProductCard(props) {
  return (
    <div className="product-card">
      <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>{props.price}</p>
        <button>{props.button}</button>
    </div>
  )
}

export default ProductCard
