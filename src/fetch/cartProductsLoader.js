import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () =>{
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();
    const storeCart = getShoppingCart();
    const saveCart = [];
    for(const id in storeCart){
        const addProduct = products.find(pd => pd.id === id);
        if(addProduct){
            const quantity = storeCart[id];
            addProduct.quantity = quantity;
            saveCart.push(addProduct);
        }
    }

     return(saveCart) ;
}

export default cartProductsLoader;