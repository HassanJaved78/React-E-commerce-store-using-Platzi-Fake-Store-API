import React from 'react';
import './styles/ProductList.css';

import { useGetProductsQuery } from '../features/api/productsApi';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const ProductList = () => {

    const { data: productsList, error, isLoading } = useGetProductsQuery();
    const dispatch = useDispatch();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div id="products-page">
            <h1>Products List</h1>
            <div className="list-container">
                {
                    productsList.map((product) => (
                        <div key={product.id} className="product-container">
                            <img src={product.images?.[0]} alt={product.title} className="product-img"/>
                            <h3>{product.title}</h3>
                            <p className="description">{product.description}</p>
                            <p className="category">{product.category.name}</p>
                            <p className="price">{product.price}</p>

                            <button
                                className="add-to-cart-btn"
                                onClick={() => dispatch(addToCart(product))}
                            >
                                Add to Cart
                            </button>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductList;