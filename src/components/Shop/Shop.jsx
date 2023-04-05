import React,{ useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight  } from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
    const [products , setProducts]=useState([]);
    const [cart, setCart] =useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    useEffect(()=>{
        const storeCart = getShoppingCart();
        const saveCart = [];
        for(const id in storeCart){
        //  console.log(products)
            const addProduct =products.find(product => product.id === id);
            if(addProduct){
                const quantity = storeCart[id];
            addProduct.quantity = quantity;
            saveCart.push(addProduct);
            }
           
            setCart(saveCart);
        }
        
    },[products])
    const handleCard=(product)=>{
        const newCart = [...cart , product];
        setCart(newCart);
         addToDb(product.id)
    }
    const allDeleteHandle =()=>{
        setCart([]);
        deleteShoppingCart();
        
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
              <Cart cart={cart} allDeleteHandle={allDeleteHandle}><Link to="/order"><button className='w-full py-2 px-2 text-xl text-center font-bold text-white bg-orange-400 mt-2 rounded-lg flex items-center gap-2 '><span>Review order</span> <FontAwesomeIcon className='text-xl' icon={faArrowRight } /></button> 
              </Link></Cart>
              
            </div>
        </div>
    );
};

export default Shop;