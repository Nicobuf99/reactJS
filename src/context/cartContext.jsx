import { createContext, useState } from "react";

const cartContext = createContext({ default: "default" });
const Provider = cartContext.Provider;

function CartProvider(props) {
  const [cart, setCart] = useState([]);

  function addItem(product, count = 1) {
    const isInCart = cart.some((itemInCart) => itemInCart.id === product.id);
    if (isInCart) {
      const updatedCart = cart.map((itemInCart) => {
        if (itemInCart.id === product.id) {
          return {
            ...itemInCart,
            count: itemInCart.count + count,
          };
        }
        return itemInCart;
      });
      setCart(updatedCart);
    } else {
      const newCart = [...cart];
      newCart.push({ ...product, count });
      setCart(newCart);
    }
  }

  function getPriceInCart() {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.price * item.count;
    });
    return totalPrice;
  }

  function removeItem(id) {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  }

  function clearCart() {
    setCart([]);
  }

  function getCountInCart() {
    let total = 0;
    cart.forEach((item) => {
      total += item.count;
    });
    return total;
  }

  return (
    <Provider
      value={{
        cart,
        addItem,
        getCountInCart,
        getPriceInCart,
        removeItem,
        clearCart,
      }}
    >
      {props.children}
    </Provider>
  );
}

export { cartContext, CartProvider };
