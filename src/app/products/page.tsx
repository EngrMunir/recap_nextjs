import React from 'react';

const AllProducts = async() => {
    const res = await fetch('http://localhost:5000/products');
    const products = res.json();
    
    return (
        <div>
            <h1>All products</h1>
        </div>
    );
};

export default AllProducts;