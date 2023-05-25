import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';

const showOrders = (props) => {
  let amount = 0
  props.orders.forEach(el => amount += Number.parseFloat(el.price))
  return (
    <div>
      {props.orders.map(el => ( <Order onDelete={props.onDelete} key={el.id} item={el} />))}
      <p className='amount'>Amount: {new Intl.NumberFormat().format(amount)}$ </p>
    </div>
  );
}

const showNothing = () => {
  return (<div className='empty'>
    <h2>No items</h2>

  </div>)

}

export default function Header(props) {
  let [cartOpen,setCartOpen] = useState(false)

  
  return (
    <header>
        <div>

            <span className='logo'>House Staff</span>
            <ul className='nav'>
              <li>About us</li>
              <li>Contact</li>
              <li>Office</li>


            </ul>
            <FaShoppingCart onClick={() => setCartOpen(cartOpen =!cartOpen)}className={`shop-cart-button ${cartOpen && 'active'}`}/>
            
            {cartOpen &&(
                <div className='shop-cart'>
                   {props.orders.length > 0?
                    showOrders(props): showNothing()}
                    
                </div>
            )}
        </div>

    <div className='presentation'></div>
    </header>
  )
}
