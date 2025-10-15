import {useState, useEffect} from 'react'
import ProductCard from './ProductCard'

function HeroProducts() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    async function fetchProducts() {
        try {
            const products = await fetch('http://localhost:3000/')
            const data = await products.json()
            setProducts(data)
            setLoading(false)

            

        } catch (error) {
          
            console.log(error);
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    if(loading) {
        return <div>Loading...</div>
    }

    if(products.length === 0) {
        return <div>No products found</div>
    }


  return (
    <div>
      <div className='flex flex-wrap justify-center gap-4 p-4'>
        {
          products.map((item, index) => (
            <ProductCard key={index} title= {item.title} description={item.description} price={item.price} image= {item.image} />
          ))
        }

      </div>
    </div>
  )
}

export default HeroProducts
