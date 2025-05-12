import { BaseSchema, model } from "../db";
import { IUser } from "../types";

// name
const modelName = "User";

// project schema
const userSchema = BaseSchema<IUser>({
  id: String,
  name: {
    title: String,
    first: String,
    last: String,
  },
  email: String,
  phone: String,
  cell: String,
    dob: {
        date: String,
        age: Number,
  },
  location: {
    street: {
      number: Number,
      name: String,
    },
    city: String,
    state: String,
    postcode: Number,
    country: String,
  },
  picture: {
    large: String,
    medium: String,
    thumbnail: String,
  },
  gender: String,
  nat: String,
});

// model
export const User = model<IUser>(modelName, userSchema);
