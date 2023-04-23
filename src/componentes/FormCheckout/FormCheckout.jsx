import { React, useState, useContext } from 'react'
import "./FormCheckout.css"
import { cartContext } from '../../context/cartContext';

function FormCheckout({ onCheckOut }) {

  const context = useContext(cartContext)
  const clearCart = context.clearCart;


    const [userData, setUserData] = useState({
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      direccion: "",
    });

  
    function handleInputChange(evt) {
      const inputText = evt.target.value;
      const inputName = evt.target.name;
      const newUserData = { ...userData };
      newUserData[inputName] = inputText;
      setUserData(newUserData);
    }
  
    function onSubmit(evt) {
      evt.preventDefault();
      onCheckOut(userData);
      clearCart();
    }
  
    function clearFormData(evt) {
      evt.preventDefault();
      setUserData({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        direccion: "",
      });
    }
  
    return (
      <>
        <h1 className="h1-form">Ingresa tus datos para finalizar la compra</h1>
        <form className="form-usuario" onSubmit={onSubmit}>
          <div className="div-form">
            <label className="label-form">NOMBRE</label>
            <input
              className="input-form"
              value={userData.nombre}
              name="nombre"
              type="text"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="div-form">
            <label className="label-form">APELLIDO</label>
            <input
              className="input-form"
              value={userData.apellido}
              name="apellido"
              type="text"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="div-form">
            <label className="label-form">EMAIL</label>
            <input
              className="input-form"
              value={userData.email}
              name="email"
              type="email"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="div-form">
            <label className="label-form">TELÉFONO</label>
            <input
              className="input-form"
              value={userData.telefono}
              name="telefono"
              type="tel"
              pattern="[0-9]{10}"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="div-form">
            <label className="label-form">DIRECCIÓN</label>
            <input
              className="input-form"
              value={userData.direccion}
              name="direccion"
              type="text"
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <button type="submit" className="button-checkout">
              Crear pedido
            </button>
            <button type="reset" onClick={clearFormData} className="button-checkout">
              Cancelar
            </button>
          </div>
        </form>
      </>
    );
  }
  
  export default FormCheckout;
  
