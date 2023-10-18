import { Schema, Types, model, Model } from "mongoose";
import { Car } from "../interfaces/car.interface";

const ItemSchema = new Schema<Car>(
  {
    //props we used
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    gas: {
      type: String,
      enum: ["gasoline", "electric"],
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true, //with this we say one a field is created the collection of data when this is stored
    versionKey: false, //mongoo for default make a a data like v1 or v2
  }
);

const ItemModel = model("items", ItemSchema);
export default ItemModel;
