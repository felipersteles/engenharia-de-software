import Login from "./componentes/publico/Login/Login";
import Home from "./componentes/privado/Home/Home";
import Cadastro from "./componentes/publico/Cadastro/Cadastro";
import { Route, Routes } from "react-router";
import { useState } from "react";
import Categoria from "./componentes/privado/Categoria/Categoria";

function App() {
  const [estaAutenticado, setEstaAutenticado] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/hamburguer"
        element={<Categoria categoria={"hamburguer"} />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  );
}

export default App;
