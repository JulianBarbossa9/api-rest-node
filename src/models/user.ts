import { Schema, Types, model, Model } from "mongoose";
import { User } from "../interfaces/user.interface";

const UserSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: 'missing description'
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const UserModel = model("user", UserSchema);
export default UserModel;
