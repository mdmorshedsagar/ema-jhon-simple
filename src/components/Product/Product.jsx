import React from 'react';

const Product = (props) => {
    // console.log(props)
    const {name,seller,ratings,price,img}=props.product;
    const handleCard = props.handleCard;
    return (
        <div className='w-[300px] h-[508px] border-solid border-2 border-indigo-600 mb-4 rounded-lg  relative'>
            <img className='p-2'  src={img} alt="" srcset="" />
          <div className='p-2'>
          <h2 className='text-xl'>{name}</h2>
            <p >Price: ${price}</p>

            <p className='mt-6'>Manufacturer: {seller}</p>
            <p>Rating: {ratings} star</p>
          </div>
          <button onClick={()=>handleCard(props.product)} className='absolute bottom-0 bg-secondary w-[100%] text-center mx-auto h-[50px] border-t-2 border-indigo-500  hover:border-solid hover:border-2 hover:border-indigo-600 hover:bg-orange-600 hover:text-white'>Add to cart</button>
         
          </div>
         
        
    );
};

export default Product;