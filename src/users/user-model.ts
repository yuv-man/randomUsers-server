import { BaseSchema, model, ObjectId } from "../db";
import { IUser } from "../types";

// name
const modelName = "User";

// project schema
const userSchema = BaseSchema<IUser>({
  id: {
    type: ObjectId,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  gender: {
    type: String,
  },
  dateOfBirth: {
    type: String,
  },
  avatar: {
    type: String,
  },
  location: {
    type: Object,
  },
});

// model
export const User = model<IUser>(modelName, userSchema);
