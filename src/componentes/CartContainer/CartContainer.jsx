import React, {useContext} from 'react';
import { cartContext } from '../../context/cartContext';
import { Link, useNavigate } from 'react-router-dom';
import "./CartContainer.css";
import { createOrder } from '../../services/firestore';
import FormCheckout from '../FormCheckout/FormCheckout';
import CartTable from '../CartTable/CartTable';

function CartContainer() {

    const context = useContext(cartContext)
    const {cart, getPriceInCart, removeItem} = context;
    const navigateTo = useNavigate()

    async function handleCheckOut(userData){
      const order= {
        items : cart,
        buyer : userData,
        date : new Date(),
        total : getPriceInCart(),
      }
      const orderID= await createOrder(order);

      navigateTo(`/checkout/${orderID}`)
    }

    return (
<div>
  <h1 className='h1-cart'>TU CARRITO</h1>
  {getPriceInCart() > 0 ? (
    <div>
    <CartTable cart={cart} getPriceInCart={getPriceInCart} removeItem={removeItem} />
    <FormCheckout onCheckOut={handleCheckOut} />
    </div>
  ) : (
    <div className="empty">
      <span>Tu carrito está vacío</span>
      <Link to="/">Volver al inicio</Link>
    </div>
  )}
</div>


      );
}

export default CartContainer
