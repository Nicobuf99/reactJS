import "./App.css";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <header className="App-header"><NavBar/></header>

      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/category/:categoryid" element={<ItemListContainer/>} />
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
