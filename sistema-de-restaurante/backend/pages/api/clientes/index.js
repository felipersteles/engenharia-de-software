import { ClienteModel } from "../../../models/ClienteModel";
import { conectMongoDB } from "../../../middleware/connectMongoDB.middleware";

async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const clientes = await ClienteModel.find();
      res.status(200).json(clientes);
    } catch (err) {
      res.status(500).json({ error: "Erro ao listar clientes" });
    }
  }
}

export default conectMongoDB(handler);
