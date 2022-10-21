import mongoose from "mongoose";

const BurguerSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    preco: { type: Number, required: true },
    adicionais: {
      type: [
        {
          desc: { type: String, required: true },
          preco: { type: Number, required: true },
        },
      ],
      required: false,
    },
  },
  { timestamps: true }
);

export const BurguerModel =
  mongoose.models.burguers || mongoose.model("burguers", BurguerSchema);
