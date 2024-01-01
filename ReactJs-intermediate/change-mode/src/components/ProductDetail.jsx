import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../api/api';

function ProductDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsData = await getProducts();
                const productDetail = productsData.find(product => product.id === parseInt(productId));
                setProduct(productDetail);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData();
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>;
    }

    const { title, photo, price, desk } = product;

    return (
        <div>
            <h1>Product Detail for ID: {productId}</h1>
            <div>
                <img src={photo} alt={title} className='w-20' />
                <h2>{title}</h2>
                <p>{price}</p>
                <p>{desk}</p>
            </div>
        </div>
    );
}

export default ProductDetail;
