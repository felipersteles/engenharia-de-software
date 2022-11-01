import mongoose from "mongoose";

const PedidoSchema = new mongoose.Schema(
  {
    cliente: {
      type: String,
      required: true,
      maxlength: 60,
    },
    produtos: [{
      nome: {type: String, required: true},
      preco: {type: Number, required: true},
    }],
    endereco: {
      type: String,
      required: true,
      maxlength: 200,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      default: 0,
    },
    metodo: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const PedidoModel =
  mongoose.models.pedidos || mongoose.model("pedidos", PedidoSchema);
