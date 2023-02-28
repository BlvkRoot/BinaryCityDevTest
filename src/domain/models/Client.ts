import { ClientDTO } from "@appication/dtos/ClientDTO";
import { model, Schema } from "mongoose";

const clientSchema = new Schema<ClientDTO>({
  name: {
    type: String,
    require: true,
  },
  clientCode: {
    type: String,
    require: true,
    unique: true
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const ClientModel = model<ClientDTO>("Client", clientSchema);

export { ClientModel };
