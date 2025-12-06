import './Product.css'

const Product = ({product}) => {
  return (
    <div className='product'>
        <div className='image'>
            <img src={product.image} alt="" />
        </div>
        <div className='data'>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <h4>Price : {product.price}</h4>
        </div>
    </div>
  )
}

export default Product