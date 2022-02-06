import React,{ useEffect } from 'react';
import {  Table, Button } from 'react-bootstrap';

const Cart = ({ product, clearCart, deleteQuantity, increaseQuantity, decreaseQuantity}) => { 

  console.log(product.length)

    const getTotal = () => {
      return product.reduce((sum, {price, quantity})=> 
      sum + price*quantity, 0).toFixed(2)
    }  


    if(product.length>0){
      return (    
        <div>
            <h2>Cart</h2>
            <Table striped bordered hover size="sm">
                     
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Product Name</th>
                          <th>Quantity</th>
                          <th>Price</th>
                          <th>Remove</th>
                        </tr>
                      </thead>
          
                      <tbody>
           {
             product.map( (oneProduct, index)=>(

              
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{oneProduct.name}</td>
                  <td><Button onClick={()=>{decreaseQuantity(oneProduct)}}>-</Button>{oneProduct.quantity}<Button onClick={()=>{increaseQuantity(oneProduct)}}>+</Button></td>
                    <td>{oneProduct.price}</td>
                    <td><button  onClick={()=>{deleteQuantity(oneProduct)}} className='btn btn-danger'>Delete</button></td>
                </tr>
             ))   }
            
                <tr>
                  <td colSpan={3}>Bendra suma: { getTotal()}</td>
                  <td><button className='btn btn-success' >Pay</button></td>             
                  <td><button className='btn btn-danger' onClick={clearCart}>Reset</button></td>             
                </tr>
           
              </tbody>
             </Table>
           
        </div>
      ) 
    }
          else{
            return (
            <div>
            <h3>Prekių krepšelis tuščias</h3>
            </div>
            )
          }   
}

export default Cart;