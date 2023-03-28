import React from 'react';

const Cart = ({cart}) => {
    let totalCharge = 0;
    let shipingCharge=0;
    for(const product of cart){
        totalCharge=totalCharge + product.price;
        shipingCharge = shipingCharge + product.shipping;
    }
    const tax = totalCharge * 7/100;
    const total= totalCharge + shipingCharge + tax;
    return (
        <div className='bg-secondary sticky top-0 px-4 py-8 mt-2'>
            <h1 className='text-center text-2xl font-bold'>Shopping cart</h1> 
            <p className='text-xl my-4 font-bold'>Total cart: ${cart.length}</p>
            <p className='text-xl my-4 font-bold'>totat price: ${totalCharge}</p>
            <p className='text-xl my-4 font-bold'>shipping: ${shipingCharge}</p>
            <p className='text-xl my-4 font-bold'>Tax: ${tax.toFixed(2)}</p>
            <p className=' text-xl my-4 font-bold'>All Total: ${total.toFixed(2)}</p>
        </div>
    );
};

export default Cart;