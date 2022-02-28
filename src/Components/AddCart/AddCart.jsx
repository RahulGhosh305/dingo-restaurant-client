import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import CartHeader from './CartHeader/CartHeader';

const AddCart = ({cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance}) => {
    return (
        <>
            <Navbar />
            <CartHeader/>
            {/* <CartHeader handleCartClearance={handleCartClearance} cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/> */}
        </>
    );
};

export default AddCart;