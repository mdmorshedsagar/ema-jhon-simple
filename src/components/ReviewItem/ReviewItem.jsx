import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash  } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({cart,handleDeleteCarts}) => {
  const {id,price,name,img,quantity}=cart;
    return (
        <div className='border-2 rounded-lg m-4 p-2 flex items-center gap-2'>
            <img className='w-[95px] h-[95px]' src={img} alt="" />

            <div>
                <p className='font-bold text-2xl'>{name}</p>
                <p className='font-bold '>Price: <span className='text-orange-500'>${price}</span> </p>
                <p className='font-bold '>Product quantity: <span className='text-orange-500'>{quantity}</span> </p>
            </div>
           <div onClick={()=> handleDeleteCarts(id)} className='ml-auto'>
           <FontAwesomeIcon className='text-red-500 text-2xl bg-orange-300 p-3 rounded-[50%]' icon={faTrash } />
           </div>
        </div>
    );
};

export default ReviewItem;