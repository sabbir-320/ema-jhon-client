import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productKey} = useParams();
    const [singleProduct, setSingleProduct] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/procucts/${productKey}`)
        .then(res => res.json())
        .then(data => {
            setSingleProduct(data);
        })
    },[productKey])
    console.log(singleProduct);
    const product = singleProduct.find(pd => pd.key === productKey);
    console.log(product);
    
    return (
        <div>
            <h1>Your Product Details.</h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;