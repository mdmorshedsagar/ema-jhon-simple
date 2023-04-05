import React, { useState } from 'react';
import Cart from '../../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight  } from '@fortawesome/free-solid-svg-icons'

const Order = () => {
    const SavedCarts = useLoaderData();
    const [carts, setCarts]= useState(SavedCarts);
    const handleDeleteCarts= (id)=>{
        const findCarts= carts.filter(cart => cart.id !== id)
         setCarts(findCarts);
         removeFromDb(id);
    }

    const allDeleteHandle =()=>{
        setCarts([]);
        deleteShoppingCart();
    }
    
    return (
        <div>
               <div className='container  grid grid-cols-6 p-12'>
            <div className=' col-span-4'>
                {
                   carts.map(cart => <ReviewItem key={cart.id} cart={cart} handleDeleteCarts={handleDeleteCarts}></ReviewItem> )
                }
             
            </div>
            <div className='col-span-2 '>
               <Cart cart={carts}  allDeleteHandle={allDeleteHandle}>
                <Link to="/checkout">
               <button className='w-full py-2 px-4 text-xl  font-bold text-white bg-orange-400 mt-2 rounded-lg flex justify-center items-center gap-2 '><span>Proceed checkout</span> <FontAwesomeIcon className='text-xl' icon={faArrowRight } /></button> 
              </Link>
               </Cart>
              
            </div>
        </div>
        </div>
    );
};

export default Order;