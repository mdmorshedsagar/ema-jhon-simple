import React from 'react';

const Product = (props) => {
    // console.log(props)
    const {name,seller,ratings,price,img}=props.product;
    const handleCard = props.handleCard;
    return (
        <div className='w-[300px] h-[508px] border-solid border-2 border-indigo-600 mb-4 rounded-lg p-2 relative'>
            <img  src={img} alt="" srcset="" />
          <div>
          <h2 className='text-xl'>{name}</h2>
            <p >Price: ${price}</p>

            <p className='mt-8'>Manufacturer: {seller}</p>
            <p>Rating: {ratings} star</p>
          </div>
          <button onClick={()=>handleCard(props.product)} className='absolute bottom-0 bg-secondary w-[96%] text-center mx-auto h-[50px]  border-solid border-2 border-indigo-600 hover:bg-orange-600 hover:text-white'>Add to cart</button>
         
          </div>
         
        
    );
};

export default Product;