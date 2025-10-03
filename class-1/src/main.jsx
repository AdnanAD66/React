import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductCard from './components/ProductCard.jsx'

createRoot(document.getElementById('root')).render(
<>
    
<ProductCard
  title="Sample Product"
  description="This is a sample product description."
  price="$19.99"
  button="Add to Cart"
/>
<ProductCard
  title="Sample Product 2"
  description="This is a sample product description."
  price="$19.99"
  button="Add to Cart"
/>
<ProductCard
  title="Sample Product 3"
  description="This is a sample product description."
  price="$19.99"
  button="Add to Cart"
/>

</> 
)
