import mongoose from "mongoose";

const PedidoSchema = new mongoose.Schema(
  {
    produtos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "burguers",
      },
    ],
    nome_usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "usuario",
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      default: 0,
    },
    method: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const PedidoModel =
  mongoose.models.pedidos || mongoose.model("pedidos", PedidoSchema);
