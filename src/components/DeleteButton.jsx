import React from 'react';

const DeleteButton = ({ deleteCallback }) => {
    return (
        <button type='click' onClick={deleteCallback}>
            Delete
        </button>
    );
};

export default DeleteButton;
