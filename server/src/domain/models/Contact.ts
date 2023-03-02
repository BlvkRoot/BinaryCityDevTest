
import { ContactDTO } from "@application/dtos/ContactDTO";
import mongoose, { model, Schema } from "mongoose";

const contactSchema = new Schema<ContactDTO>({
  name: {
    type: String,
    require: true,
  },
  surname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  clients: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
  }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const ContactModel = model<ContactDTO>("Contact", contactSchema);

export { ContactModel };
