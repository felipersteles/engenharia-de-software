import { conectMongoDB } from "../../../middleware/connectMongoDB.middleware";
import { BurguerModel } from "../../../models/BurguerModel";

async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const burguers = await BurguerModel.find();
        res.status(200).json(burguers);
    } catch (err) {
      res.status(500).json({ error: "Erro ao listar hamburguers" });
    }
  }

  if (req.method === "POST") {
    const produto = req.body;

    const produtoRepetido = await BurguerModel.find({
      nome: produto.nome,
    });
    if (produtoRepetido && produtoRepetido.length > 0)
      res.status(400).json({ erro: "Produto já cadastrado." });

    try {
      const novoProduto = await BurguerModel.create(produto);
      res.status(200).json(novoProduto);
    } catch (err) {
      res.status(500).json({ error: "Erro ao adicionar hamburguer." });
    }
  }
}

export default conectMongoDB(handler);
