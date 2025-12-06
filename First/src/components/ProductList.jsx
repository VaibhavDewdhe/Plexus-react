import { useEffect, useState } from "react"
import Product from "./Product";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(json => setProducts(json));
    }, []);

    
    return (
        <div>
            <h2>Product list</h2>
            {products.map(product => <Product product={product} />)}
        </div>

    )
}

export default ProductList