import { useEffect, useState } from "react";
import Product from "../Product/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "../Cart/Cart";
import Header from "../Header/Header";
import ErrorPage from "../ErrorPage/ErrorPage";
import Item from "../Item/Item";

const ProductsList = () => {

    //prekiu krepseliui
    const[product, setProduct] = useState([]);

    const addToCart = (item) => {
            //susikuriu state esancio krepselio kopija
        const newCart = [...product];
            // tikrinu, ar jau yra preke tokiu pavadinimu
        let productInCart = newCart.find(
            (localVar) => item.id === localVar.id
        )
        console.log("item id "+item.id)
        console.log("kintamojo reiksme productInCart "+productInCart)
            //kai tokios pat prekes krepselyje dar nera
            // tai sukurti nauja property kieki ir suteikti jam 1 vnt reiksme
            if(productInCart === undefined && item.countInStock > 0){
                productInCart = {
                    ...item,
                    quantity: 1,
                } 
                newCart.push(productInCart);
            } else if (productInCart && productInCart.quantity < item.countInStock) {
                    productInCart.quantity++;
                } else {
                    alert("Kiekis nepakankamas");
                }
                
    
            

        setProduct(newCart);
   
    }
 
    const clearCart = () => {
        setProduct([]);
    }

const increaseQuantity = (item) => {
    const newCart = [...product];

    let productInCart = newCart.find(
        (localVar) => item.id === localVar.id
    )
    if(productInCart && productInCart.quantity < item.countInStock) {
        productInCart.quantity++;
        setProduct(newCart);
    } else {
        alert('Kiekis nepakankamas');
    }
} 
const decreaseQuantity = (item) => {
    const newCart = [...product];

    let productInCart = newCart.find(
        (localVar) => item.id === localVar.id
    )
    if(productInCart && productInCart.quantity > 1) {
        productInCart.quantity--;
    } else {
        newCart.splice(productInCart, 1);
    }
    setProduct(newCart);
} 

const deleteQuantity = (item) => {
    setProduct(product.filter((local) => local !== item));
} 


     console.log(product);

  return ( 
    <Router>
    <Header />
    <Routes>
    <Route path='/' element={<Product addToCart={addToCart} />} />
    <Route path='/item/:name' element={<Item />} />
     <Route path='/cart' element={<Cart product={product} deleteQuantity={deleteQuantity} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} clearCart={clearCart}/>} />
     <Route path='/*' element={<ErrorPage />} />
     </Routes>
     </Router>  
  )
};

export default ProductsList;
