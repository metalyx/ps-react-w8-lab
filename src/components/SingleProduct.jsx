import React, { useContext, useState } from 'react';
import { GlobalContext } from '../contexts/GlobalContextProvider';
import DeleteButton from './DeleteButton';

const SingleProduct = ({ name, price, index, img, description }) => {
    const [isBeignEdit, setIsBeignEdit] = useState(false);
    const [tempName, setTempName] = useState(name);
    const [tempPrice, setTempPrice] = useState(price);
    const [tempImg, setTempImg] = useState(img);
    const [tempDesc, setTempDesc] = useState(description);

    const [products, setProducts] = useContext(GlobalContext);

    const handleOnSave = () => {
        const newArray = products.map((p, ind) => {
            if (ind === index) {
                return {
                    name: tempName,
                    price: tempPrice,
                    description: tempDesc,
                    img: tempImg,
                };
            } else {
                return p;
            }
        });

        setProducts(newArray);
        setIsBeignEdit(false);
    };

    const handleDelete = () => {
        const newArray = products.filter((p, ind) => ind !== index);

        setProducts(newArray);
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid black',
                width: '200px',
            }}
        >
            <h2>Product Card</h2>
            {!isBeignEdit && (
                <>
                    <img style={{ maxWidth: '100px' }} src={img} alt={name} />
                    <span>Name: {name}</span>
                    <span>Price: {price}</span>
                    <span>Description: {description}</span>
                </>
            )}
            {isBeignEdit && (
                <>
                    <input
                        value={tempName}
                        onChange={(e) => setTempName(e.target.value)}
                    />
                    <input
                        value={tempPrice}
                        onChange={(e) => setTempPrice(e.target.value)}
                    />
                    <input
                        value={tempImg}
                        onChange={(e) => setTempImg(e.target.value)}
                    />
                    <input
                        value={tempDesc}
                        onChange={(e) => setTempDesc(e.target.value)}
                    />
                </>
            )}

            {!isBeignEdit && (
                <button onClick={() => setIsBeignEdit(true)} type='button'>
                    Edit
                </button>
            )}

            {isBeignEdit && (
                <button onClick={handleOnSave} type='button'>
                    Save
                </button>
            )}

            <DeleteButton deleteCallback={handleDelete} />
        </div>
    );
};

export default SingleProduct;
