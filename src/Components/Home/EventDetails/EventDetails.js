import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const EventDetails = () => {
    const [product,setProduct] = useState([]);
    console.log(product)
    const {productId} = useParams()
     
    useEffect( () => {
     
     fetch(`http://localhost:5000/event/${productId}`)
     .then(res => res.json())
     .then(data => setProduct(data))

    },[productId])

    return (
        <div className="align-item-center">
            <h1>{product.name}</h1>
            <img src={product.imageUrl} alt=""/>
            <h4>price: {product.price}</h4>
        </div>
    );
};

export default EventDetails;