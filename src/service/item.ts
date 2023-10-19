//Logica de negocio

import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item";

const insertCar = async (item: Car): Promise<Car> => {
  const responseInsert = await ItemModel.create(item); //Insert the item in db
  return responseInsert;
};

const getCarItems = async (): Promise<Car[]> => {
  return await ItemModel.find({});
};

const getCarDetail = async (id: string) => {
  const responseDetail = await ItemModel.findOne({ _id: id });
  return responseDetail;
};

const updateCar = async (id: string, data: Car) => {
  const responseItem = await ItemModel.findByIdAndUpdate({ _id: id }, data, { new: true });//With new true, return a object already updted 
  return responseItem
};

const deleteCar =async (id:string) => {
  const deleteOneCar = await ItemModel.deleteOne({_id: id})
  return deleteOneCar
}

export { insertCar, getCarItems, getCarDetail, updateCar, deleteCar };
