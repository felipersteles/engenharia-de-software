import { validarTokenJwt } from "../../middleware/validarTokenJwt.middleware";

const usuarioEndPoint = (req, res) => {
  return res.status(200).json("Usuario autenticado com sucesso!");
};

export default validarTokenJwt(usuarioEndPoint);
