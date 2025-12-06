import Product from './Product'
import ProductList from './ProductList'

const HomePage = () => {
  return (
    <div>
        <a href={<Product/>}>single product</a>
        <a href={<ProductList/>}>Product List</a>
    </div>
  )
}

export default HomePage