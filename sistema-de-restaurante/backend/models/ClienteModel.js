import mongoose, { Schema } from "mongoose";

const ClienteSchema = new Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true },
  senha: { type: String, required: true },
  endereco: {
    bairro: { type: String},
    rua: { type: String},
    numero: { type: Number},
  },
  formaPagamento: {
    type: [
      {
        nCartao: { type: Number },
        donoCartao: { type: String },
      },
    ],
  },
});

export const ClienteModel =
  mongoose.models.clientes || mongoose.model("clientes", ClienteSchema);
