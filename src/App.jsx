import "./App.css";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/cartContext";
import CartContainer from "./componentes/CartContainer/CartContainer";
import Checkout from "./componentes/Checkout/Checkout";



function App() {

  return (
    <>
    <CartProvider>
    <BrowserRouter>
      <header className="App-header"><NavBar/></header>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/category/:categoryid" element={<ItemListContainer/>} />
        <Route path="/cart" element={<CartContainer/>} />
        <Route path="/checkout/:orderID" element={<Checkout/>} />
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;