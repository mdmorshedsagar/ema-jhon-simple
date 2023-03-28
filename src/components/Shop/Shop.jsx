import React,{ useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [products , setProducts]=useState([]);
    const [cart, setCart] =useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    const handleCard=(product)=>{
        const newCart = [...cart , product];
        setCart(newCart);

    }
    return (
        <div className='container mx-auto grid grid-cols-6 '>
            <div className='col-span-5 grid grid-cols-3 mt-4 ml-4'>
               {
                products.map(product => <Product 
                    product={product} 
                key={product.id} 
                 handleCard={handleCard}> 
                </Product>)
               }
            </div>
            <div className='col-span-1'>
              <Cart cart={cart}></Cart>
              
            </div>
        </div>
    );
};

export default Shop;