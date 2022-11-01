import React from "react";
import pedido from "../../../assets/img/pedidos.svg";
import carrinho from "../../../assets/img/carrinho.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="containerNavbar">
      <img src={pedido} alt="pedidos" />
      <input placeholder="Procure um pedido" type="text" />
      <img src={carrinho} alt="carrinho" />
    </div>
  );
};

export default Navbar;
