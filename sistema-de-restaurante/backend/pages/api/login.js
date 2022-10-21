import { conectMongoDB } from "../../middleware/connectMongoDB.middleware";
import md5 from "md5";
import jwt  from "jsonwebtoken";
import { ClienteModel } from "../../models/ClienteModel";

const endpointLogin = async (req, res) => {
  const { CHAVE_JWT } = process.env;
  if (!CHAVE_JWT)
    return res.status(500).json({ erro: "Chave JWT não informada" });

  //login é um post
  if (req.method === "POST") {
    const { login, senha } = req.body;
    const usuariosEncontrados = await ClienteModel.find({
      email: login,
      senha: md5(senha),
    });
    if (usuariosEncontrados && usuariosEncontrados.length > 0) {
      const usuarioEncontrado = usuariosEncontrados[0];

      //cria token
      const token = jwt.sign({ _id: usuarioEncontrado._id }, CHAVE_JWT);

      return res.status(200).json({
        nome: usuarioEncontrado.nome,
        email: usuarioEncontrado.email,
        token: token,
      });
      }
      
      return res.status(400).json({erro: 'Usuário ou senha não encontrado.'});
  }

  //console.log(req.method)
  return res.status(405).json({ erro: "Método inexistente." });
};

export default conectMongoDB(endpointLogin);
