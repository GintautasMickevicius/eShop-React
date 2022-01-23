import { useState } from "react";
import Product from "../Product/Product";

const ProductsList = () => {

    //prekiu krepseliui
    const[product, setProduct] = useState([]);

    const addToCart = (item) => {

        const newCart = [...product];

        let productInCart = newCart.find(
            (localVar) => item.name === localVar.name
        )
        console.log("item id "+item.id)
        console.log("kintamojo reiksme productInCart "+productInCart)
            //kai tokios pat prekes krepselyje dar nera
            // tai sukurti nauja property kieki ir suteikti jam 1 vnt reiksme
            if(productInCart === undefined){
                productInCart = {
                    ...item,
                    quantity: 1,
                }
                
                newCart.push(productInCart)
            }
        // newCart.push(item);

        setProduct(newCart);
   
    }
     console.log(product);

  return ( 

  <div> 
    <Product addToCart={addToCart} />
  
  </div>
  )
};

export default ProductsList;
