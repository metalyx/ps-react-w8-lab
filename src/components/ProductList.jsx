import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContextProvider';
import SingleProduct from './SingleProduct';

const ProductList = () => {
    const [products] = useContext(GlobalContext);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {products.map((product, index) => (
                <SingleProduct
                    key={index}
                    name={product.name}
                    price={product.price}
                    img={product.img}
                    description={product.description}
                    index={index}
                />
            ))}
        </div>
    );
};

export default ProductList;
