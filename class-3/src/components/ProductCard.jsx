import React from 'react'

function ProductCard(
    {title,
    price, 
    description,
    image}) {

    

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-xs flex flex-col">
      <div className="flex justify-center items-center bg-gray-100 h-56">
        <img
          src={image}
          alt={title}
          className="object-contain h-48 w-48 transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h2 className="font-semibold text-lg text-gray-900 mb-1">{title}</h2>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-blue-600 font-bold text-base">${price}</span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 shadow-sm">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard


