import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';

const Shop = () => {
    const products = useLoaderData()
    // console.log(products)
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10'>
            {
                products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
            }
        </div>
    );
};

export default Shop;