import React, { useContext, useState } from 'react';
import { GlobalContext } from '../contexts/GlobalContextProvider';

const ProductForm = () => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productImage, setProductImage] = useState('');
    let [products, setProducts] = useContext(GlobalContext);

    const submitHandle = (e) => {
        e.preventDefault();
        setProducts([
            ...products,
            {
                name: productName,
                price: productPrice,
                description: productDescription,
                img:
                    productImage ??
                    'https://via.placeholder.com/200x200?text=Smartwatch',
            },
        ]);

        setProductName('');
        setProductPrice('');
        setProductDescription('');
        setProductImage('');
    };

    return (
        <form
            onSubmit={submitHandle}
            style={{
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid black',
                padding: '50px',
                width: '200px',
            }}
        >
            <label>Product Name</label>
            <input
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
            />
            <label>Product Price</label>
            <input
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
            />
            <label>Product Description</label>
            <input
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
            />
            <label>Product Image</label>
            <input
                value={productImage}
                onChange={(e) => setProductImage(e.target.value)}
            />
            <button type='submit'>Create Product</button>
        </form>
    );
};

export default ProductForm;
