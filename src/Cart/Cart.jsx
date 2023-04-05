import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const Cart = ({cart,allDeleteHandle,children}) => {
    let totalCharge = 0;
    let shipingCharge=0;
    let quantity = 0;
    for(const product of cart){
        product.quantity = product.quantity || 1;
        totalCharge=totalCharge + product.price * product.quantity;
        shipingCharge = shipingCharge + product.shipping;
       quantity = quantity + product.quantity;
    }
    const tax = totalCharge * 7/100;
    const total= totalCharge + shipingCharge + tax;
    return (
       
        <div className='bg-secondary sticky top-0 px-4 py-8 mt-2'>
            <h1 className='text-center text-2xl font-bold'>Shopping cart</h1> 
            <p className='text-xl my-4 font-bold'>Total cart: ${quantity}</p>
            <p className='text-xl my-4 font-bold'>totat price: ${totalCharge}</p>
            <p className='text-xl my-4 font-bold'>shipping: ${shipingCharge}</p>
            <p className='text-xl my-4 font-bold'>Tax: ${tax.toFixed(2)}</p>
            <p className=' text-xl my-4 font-bold'>All Total: ${total.toFixed(2)}</p>
            <button onClick={allDeleteHandle} className='flex justify-between items-center w-full bg-red-600 text-white px-4 py-2 rounded-lg'>
                <span className='text-xl font-bold'>Clear Cart</span>
                <FontAwesomeIcon className='text-red-500 text-xl bg-orange-300 p-2 rounded-[50%]' icon={faTrash } />
            </button>
            {children}
        </div>
    );
};

export default Cart;