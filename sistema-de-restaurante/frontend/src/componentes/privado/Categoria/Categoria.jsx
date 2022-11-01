import React, { useState, useEffect } from "react";
import "./Categoria.css";
import Layout from "../Layout/Layout";
import api from "../../../api";

const Categoria = ({ categoria }) => {
  const [produtos, setProdutos] = useState([]);

  const handleClick = async () => {
    console.log(produtos);
  };

  // so vai ser executado quando for executado
  useEffect(() => {
    api.get(`produtos/${categoria}`).then(({ data }) => {
      setProdutos(data);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Layout>
        <div className="containerCategoria">
          <h1>{categoria}</h1>
          {produtos?.map((produto) => (
            <div className="containerProduto" key={produto._id}>
              <div className="produto">
                <img src={produto.img} alt="hamburguer" />
                <div className="infosProduto">
                  <div>
                    <h3>{produto.nome}</h3>
                    <span>{produto.preco}</span>
                  </div>
                  <p>{produto.desc}</p>
                </div>
              </div>

              <button onClick={handleClick}>Add ao carrinho</button>

              <div className="linhaHorizontal" />
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default Categoria;
