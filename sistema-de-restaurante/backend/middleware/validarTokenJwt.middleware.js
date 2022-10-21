import jwt from "jsonwebtoken";

export const validarTokenJwt = (handler) => (req, res) => {
  try {
    const { CHAVE_JWT } = process.env;
    if (!CHAVE_JWT)
      return res.status(500).json({ erro: "ENV chave JWT não informada." });
    if (!req || !req.headers)
      return res
        .status(401)
        .json({ erro: "Não foi possivel validar o token de acesso." });

    //options recupera informações do serviço
    if (req.method !== "OPTIONS") {
      const authorization = req.headers["auth-user"];
      if (!authorization)
        return res
          .status(401)
          .json({ erro: "Não foi possivel validar o authorization." });
      //console.log(authorization);

      const token = authorization.toString();
      if (!token) return res.status(401).json({ erro: "Problema no token" });

      const decoded = jwt.verify(token, CHAVE_JWT);
      if (!decoded)
        return res.status(401).json({ erro: "Problema no decoded" });
      //console.log(decoded)

      if (!req.query) req.query = {};

      req.query.userId = decoded._id;
    }
  } catch (error) {
    console.log(error);
    return res
      .status(401)
      .json({ erro: "Nao foi possivel validar o token de acesso" });
  }

  return handler(req, res);
};
