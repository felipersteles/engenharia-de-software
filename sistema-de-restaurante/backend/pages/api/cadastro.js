import { ClienteModel } from "../../models/ClienteModel";
import md5 from "md5";
import { conectMongoDB } from "../../middleware/connectMongoDB.middleware";

async function handler(req, res) {
  const { method } = req;

  if (method === "POST") {
    const novoCliente = req.body;

    //validação-----------------------------------------------------------------------------------------------------------------------
    if (!novoCliente.nome || novoCliente.nome.length < 2)
      return res.status(400).json({ erro: "Nome inválido" });

    //o certo seria usar um regex mas ...
    if (
      !novoCliente.nome ||
      novoCliente.email.length < 5 ||
      !novoCliente.email.includes("@") ||
      !novoCliente.email.includes(".")
    )
      return res.status(400).json({ erro: "Email inválido" });

    if (!novoCliente.senha || novoCliente.senha.length < 4)
      return res.status(400).json({ erro: "Senha inválida" });

    // validando se ja existe o mesmo email
    const usuariosComMesmoEmail = await ClienteModel.find({
      email: novoCliente.email,
    });
    if (usuariosComMesmoEmail && usuariosComMesmoEmail.length > 0)
      return res.status(400).json({ erro: "Email ja existe >:(" });
    //passou da validacao------------------------------------------------------------------------------------------------------------

    //console.log("Passou da validacao");
    //criptografar senha usando md5
    //console.log(novoCliente);
    const salvarCliente = {
      nome: novoCliente.nome,
      email: novoCliente.email,
        senha: md5(novoCliente.senha),
      endereco: novoCliente.endereco
      };
      
    //console.log(salvarCliente);

    try {
      const clienteCadastrado = await ClienteModel.create(salvarCliente);
      return res.status(200).json(clienteCadastrado);
    } catch (err) {
      res.status(500).json({ error: "Erro ao cadastrar cliente." });
    }
  }
}

export default conectMongoDB(handler);
